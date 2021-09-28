import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { UserContext } from '@mfdemo/shared/src/authentication/UserContext';
import Button from 'components/Button';

export const UserPage: React.FC =  observer(() => {
  const userStore = React.useContext(UserContext);
  return (
    <div style={{"border":"solid", "background": "#aa1"}}>
      <h2>UserClaims</h2>
      <Button onClick={userStore.getUser}>Get User</Button>
      <ul>
      {
        userStore?.claims?.map((x, index) => { return <li key={index}>{x.type}: {x.value}</li>})
      }
      </ul>
    </div>
  );
});
export default UserPage;