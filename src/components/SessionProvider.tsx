"use client";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export default function SessionAuthProvider(props: SessionProviderProps) {
  return <SessionProvider>{props.children}</SessionProvider>;
}
