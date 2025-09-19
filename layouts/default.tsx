import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

import { Footer } from "@/components/footer";

import { SpeedInsights } from "@vercel/speed-insights/next"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <SpeedInsights />
      <Head />
      <Navbar />
      <main className="container mx-auto px-6 flex-grow pt-16"> {/* max-w-7xl */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
