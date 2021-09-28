import React from "react";

type Scope = unknown;
type Factory = () => any;
type Container = {
  init(shareScope: Scope): void;
  get(module: string): Factory;
};

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope };

const loadComponent = (remoteName: string, exposedModule: string) => {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default"); // or get the container somewhere else

    const container = (window as { [key: string]: any })[remoteName] as Container;

    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(exposedModule);
    const Module = factory();
    return Module;
  };
};

const useDynamicScript = (remoteEntry: string) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!remoteEntry) {
      return;
    }

    const element = document.createElement("script");

    element.src = remoteEntry;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${remoteEntry}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${remoteEntry}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${remoteEntry}`);
      document.head.removeChild(element);
    };
  }, [remoteEntry]);

  return {
    ready,
    failed,
  };
};

export type LoadRemoteModuleOptions = {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
};

export const RemoteModule = (options: LoadRemoteModuleOptions) => {
  const { ready, failed } = useDynamicScript(options.remoteEntry);

  if (!ready) {
    return <h2>Loading dynamic script: {options.remoteEntry}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {options.remoteEntry}</h2>;
  }

  const Component = React.lazy(loadComponent(options.remoteName, options.exposedModule));

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
};
