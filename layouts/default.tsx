import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import {HeroUIProvider} from '@heroui/react'
import {ToastProvider} from "@heroui/toast";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <SpeedInsights />
      <Analytics />
      <Head />
      <Navbar />
      <main className="container mx-auto mb-16 px-6 flex-grow pt-16"><HeroUIProvider>
        <ToastProvider placement={"bottom-center"} />
        {" "}
        {children}
      </HeroUIProvider></main>
      <Footer />
    </div>
  );
}
