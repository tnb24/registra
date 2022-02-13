import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
const darkTheme = createTheme({
  type: "dark",
});
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
