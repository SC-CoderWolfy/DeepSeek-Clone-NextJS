import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "../../Context/AppContext";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deepseek Clone",
  description: "A Clone DeepSeek App",
};

export default function RootLayout({ children }) {
  return (


    <ClerkProvider>
      <AppContextProvider>


        <html lang="en" speedupyoutubeads="false">
          <body
            className={`${interSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </html>
      </AppContextProvider>
    </ClerkProvider>
  );
}
