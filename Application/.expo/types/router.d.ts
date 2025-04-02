/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/../utils/enum_movies`; params?: Router.UnknownInputParams; } | { pathname: `/components/card`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/home`; params?: Router.UnknownInputParams; } | { pathname: `/components/menu`; params?: Router.UnknownInputParams; } | { pathname: `/components/styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/../utils/enum_movies`; params?: Router.UnknownOutputParams; } | { pathname: `/components/card`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/home`; params?: Router.UnknownOutputParams; } | { pathname: `/components/menu`; params?: Router.UnknownOutputParams; } | { pathname: `/components/styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/../utils/enum_movies${`?${string}` | `#${string}` | ''}` | `/components/card${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/home${`?${string}` | `#${string}` | ''}` | `/components/menu${`?${string}` | `#${string}` | ''}` | `/components/styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/../utils/enum_movies`; params?: Router.UnknownInputParams; } | { pathname: `/components/card`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/home`; params?: Router.UnknownInputParams; } | { pathname: `/components/menu`; params?: Router.UnknownInputParams; } | { pathname: `/components/styles`; params?: Router.UnknownInputParams; };
    }
  }
}
