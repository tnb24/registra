import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
