"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import {HeroUIProvider} from '@heroui/react'
import {ToastProvider} from "@heroui/toast";
import { Roboto, Roboto_Mono } from 'next/font/google'

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function DefaultLayout({
  children,
  margin = 0,
}: {
  children: React.ReactNode;
  margin?: number;
}) {
  return (
    <div className={`${roboto.variable} ${robotoMono.variable} relative flex flex-col h-screen`}>
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
