import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const sans = {
  ...GeistSans,
  variable: "--font-geist-sans",
  subsets: ["latin"],
};

export const mono = {
  ...GeistMono,
  variable: "--font-geist-mono",
  subsets: ["latin"],
};
