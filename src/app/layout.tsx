import "./globals.css";

import { Inter } from "next/font/google";
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

  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header settings={settings} navigation={navigation} />
        <main className="flex-1">
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
