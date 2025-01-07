import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  pages: {
    signIn: "/auth/sign-in",
    newUser: "/auth/sign-up",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    signIn: async () => {
      return true;
    },
    jwt: async ({ token }) => {
      console.log("auth.ts jwt", token);
      return token;
    },
    session: async ({ session, token }) => {
      console.log("auth.ts session", session, token);
      return session;
    },
  },
});
