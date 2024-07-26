import { auth } from "./auth";

import {
  defaultLoginRedirect,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

export default auth((req: any) => {
  // const { nextUrl } = req;
  // const isLoggedIn = !!req.auth;

  // const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  // const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  // const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // if (isApiAuthRoute) {
  //   return null;
  // }

  // if (isAuthRoute) {
  //   if (isLoggedIn) {
  //     return Response.redirect(new URL(defaultLoginRedirect, nextUrl)); // use nextUrl to mount the absolute URL
  //   }
  //   return null;
  // }

  // if (!isLoggedIn && !isPublicRoute) {
  //   return Response.redirect(new URL("/auth/login", nextUrl));
  // }

  return null;
});

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$_next).*)", "/", "/(api|trpc)(.*)"],
// };
