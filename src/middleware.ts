// export { auth as middleware } from "@/auth";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  console.log("token", token);

  const isAuthPath = req.nextUrl.pathname.startsWith("/auth");
  const protectedPaths = ["/home", "/post"];
  const isProtectedPath = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));

  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL("auth/sign-in", req.url));
  }

  if (token && (isAuthPath || req.nextUrl.pathname === "/")) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
}

export const config = {
  matcher: ["/home/:path*", "/auth/:path*", "/"],
};
