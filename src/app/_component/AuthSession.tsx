"use client";
import { SessionProvider } from "next-auth/react";
import { MSWProvider } from "./MSWComponent";

if (
  process.env.NEXT_RUNTIME === "nodejs" &&
  process.env.NODE_ENV !== "production" &&
  process.env.NEXT_PUBLIC_MSW_ENABLED !== "false"
) {
  const { server } = await import("@/src/mocks/server");
  server.listen();
}
type Props = {
  children: React.ReactNode;
};

export default function AuthSession({ children }: Props) {
  return (
    <SessionProvider>
      <MSWProvider>{children}</MSWProvider>
    </SessionProvider>
  );
}
