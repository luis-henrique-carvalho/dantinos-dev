import "./globals.css";

import { Inter } from "next/font/google";
import Script from "next/script";
import { PrismicPreview } from "@prismicio/next";
import { asText } from "@prismicio/client";

import { createClient, repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  console.log("Settings fetched in layout:", settings);
  console.log("Navigation fetched in layout:", JSON.stringify(navigation.data));

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/@react-grab/visual-edit/dist/client.global.js"
            strategy="lazyOnload"
          />
        )}
      </head>
      <body className="overflow-x-hidden antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header settings={settings} navigation={navigation} />
        <main className="flex-1 w-full">
          {children}
        </main>
        <div className="container py-6 md:py-8">
          <footer className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {asText(settings.data.siteTitle)}
          </footer>
        </div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
