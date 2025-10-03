"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import {HeroUIProvider} from '@heroui/react'
import {ToastProvider} from "@heroui/toast";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DefaultLayout({
  children,
  margin = 0,
}: {
  children: React.ReactNode;
  margin?: number;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <SpeedInsights />
      <Analytics />
      <Head />
      <Navbar />
      <main className={margin === 0 ? "container flex-grow mx-auto mb-16 px-6 pt-16" : "pt-16"}><HeroUIProvider>
        <ToastProvider placement={"bottom-center"} />
        {" "}
        {children}
      </HeroUIProvider></main>
      <Footer />
    </div>
  );
}
