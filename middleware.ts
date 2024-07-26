import { NextResponse } from "next/server";
import { auth } from "./auth";

import {
  defaultLoginRedirect,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

export default auth((req: any) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // Ignorar recursos estáticos
  if (
    nextUrl.pathname.startsWith("/_next") ||
    nextUrl.pathname.startsWith("/static")
  ) {
    return NextResponse.next();
  }

  if (isApiAuthRoute) {
    return NextResponse.next(); // returning undefined
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(defaultLoginRedirect, nextUrl)); // use nextUrl to mount the absolute URL
    }
    return NextResponse.next(); // returning undefined
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  return NextResponse.next(); // returning undefined
});
