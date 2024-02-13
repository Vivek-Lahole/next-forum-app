import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

const publicRoutes = ["/"];
const authRoutes = ["/auth"];

export default auth((req): any => {
  const { nextUrl } = req;
  const isLogIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/");
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    console.log("HERE 1");
    return null;
  }

  if (isAuthRoute) {
    if (isLogIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    console.log("HERE 2");

    return null;
  }

  if (!isLogIn && !isPublicRoute) {
    console.log("HERE 3");

    return Response.redirect(new URL("/auth", nextUrl));
  }
  console.log("HERE 4");

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
