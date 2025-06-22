import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

declare module "next-auth" {
  interface User {
    accessToken: string;
  }
  interface Session {
    accessToken?: string;
    user?: User;
  }
}

type GoodResponse = {
  sub: number;
  email: string;
  userName: string;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
        keepSession: {},
      },
      authorize: async (credentials) => {
        console.log(credentials);

        const { email, password, keepSession } = credentials as Record<
          string,
          string
        >;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND}/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, keepSession }, null, 2),
            credentials: "include",
          }
        );
        if (!res.ok) return null;

        const resJson = await res.json();
        const setCookie = res.headers.getSetCookie();
        let refreshTokenValue: string | undefined;

        if (setCookie && setCookie.length > 0) {
          for (const cookieString of setCookie) {
            if (cookieString.includes("refreshToken=")) {
              const match = cookieString.match(/refreshToken=([^;]+)/);
              if (match && match[1]) {
                refreshTokenValue = match[1];
                break;
              }
            }
          }
        }

        if (refreshTokenValue) {
          const cookiesHandler = await cookies();
          cookiesHandler.set("refreshToken", refreshTokenValue, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7, // Ejemplo: 7 días
            path: "/",
          });
        }
        const decoded: GoodResponse = jwtDecode(resJson.accessToken);

        return {
          id: decoded.sub.toString(),
          name: decoded.userName,
          email: decoded.email,
          accessToken: resJson.accessToken,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  logger: {
    error: (err) => {
      if (err.name === "CredentialsSignin") {
        console.log("failed to login");
      } else {
        console.log(err);
      }
    },
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken as string;
      session.user = token.user as typeof session.user;
      return session;
    },
  },
});
