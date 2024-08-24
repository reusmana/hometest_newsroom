import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={twMerge(poppins.variable, "bg-white antialiased font-sans ")}
    >
      <Component {...pageProps} />
    </main>
  );
}
