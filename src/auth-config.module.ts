
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import {  AuthModule, LogLevel } from 'angular-auth-oidc-client';

// Prod
const oidcHost = 'https://account.btc-echo.de';
const redirectHost = 'https://btc-echo-api-dev-mcb.vercel.app/oauth/callback';
const unidyClientID = 'nKVKoLnguwMhWdy0qxV4HJst9NvP9Az2GdrpsJ4MwWM';

// Staging
// const oidcHost = 'https://btc-echo.staging.unidy.de';
// const redirectHost = 'https://btc-echo-api-dev-mcb.vercel.app/oauth/callback';
// const unidyClientID = 'OXpanIyzqOu4po_UmUgRNtCrQnUkwjmIB9GDsu9bsqs';

/**
 * `angular-auth-oidc-client` is an Angular library for implementing OpenID Connect & OAuth2 in Angular
 * applications. It provides support for token refresh, all modern OIDC Identity Providers, and more.
 * The library is certified by the OpenID Foundation and implements OIDC validation as specified for required features.
 *
 * @see https://github.com/damienbod/angular-auth-oidc-client
 * @see https://angular-auth-oidc-client.com/docs/intro
 */

@NgModule({
  declarations: [],
  imports: [
    AuthModule.forRoot({
      config: {
        authority: oidcHost + '/oauth/authorize',
        redirectUrl: redirectHost,
        clientId: unidyClientID,
        scope: 'openid profile email address subscriptions:read subscriptions:write active_subscriptions',
        responseType: 'code',
        useRefreshToken: true,
        triggerRefreshWhenIdTokenExpired: false,
        autoUserInfo: false,
        postLoginRoute: '/home',
        forbiddenRoute: '/home',
        unauthorizedRoute: '/home',
        logLevel: environment.production ? LogLevel.Error : LogLevel.Debug,
        triggerAuthorizationResultEvent: true,
        authWellknownEndpoints: {
          issuer: oidcHost,
          authorizationEndpoint: oidcHost + '/oauth/authorize',
          tokenEndpoint: oidcHost + '/oauth/token',
          revocationEndpoint: oidcHost + '/oauth/revoke',
          introspectionEndpoint: oidcHost + '/oauth/introspect',
          userInfoEndpoint: oidcHost + '/oauth/userinfo',
          jwksUri: oidcHost + '/oauth/discovery/keys',
          endSessionEndpoint: oidcHost + '/oauth/logout'
        },
        authWellknownEndpointUrl: oidcHost + '/.well-known/openid-configuration'
      }
    }),
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [AuthModule]
})

export class AuthConfigModule { }
