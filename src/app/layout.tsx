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
      <body className="overflow-x-hidden antialiased bg-[#0f141e] text-foreground min-h-screen flex flex-col relative">
        {/* Background gradient effect */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-purple-500/8 to-pink-500/8 blur-3xl"></div>
        </div>

        <Header settings={settings} navigation={navigation} />
        <main className="flex-1 container mx-auto px-6 md:px-8">
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
