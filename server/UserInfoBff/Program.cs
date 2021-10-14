using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddBff().AddServerSideSessions();

builder.Services
    .AddAuthentication(options =>
    {
        options.DefaultScheme = "cookie";
        options.DefaultChallengeScheme = "oidc";
        options.DefaultSignOutScheme = "oidc";
    })
    .AddCookie("cookie", options =>
    {
        options.Cookie.Name = "__shellbff";
        options.Cookie.SameSite = SameSiteMode.Strict;
    })
    .AddOpenIdConnect("oidc", options =>
    {
        options.SaveTokens = true;

        options.Authority = "https://demo.duendesoftware.com/";
        options.ClientId = "interactive.confidential";
        options.ClientSecret = "secret";
        options.ResponseType = "code";

        options.GetClaimsFromUserInfoEndpoint = true;
        options.SaveTokens = true;
    });


var app = builder.Build();
app.UseDefaultFiles();
app.UseStaticFiles();
app.UseAuthentication();
app.UseRouting();
app.UseBff();

app.UseEndpoints(endpoints =>
{
    endpoints.MapBffManagementEndpoints();
});

if (app.Environment.IsDevelopment())
{
    app.UseSpa((ISpaBuilder spaBuilder) =>
    {
        spaBuilder.UseProxyToSpaDevelopmentServer(baseUri: "http://localhost:3011");
    });
}

app.Run();
