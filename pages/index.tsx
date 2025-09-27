import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import EmblaCarousel from '@/components/carousel'
import { EmblaOptionsType } from 'embla-carousel'
import { Head } from "@/layouts/head";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function IndexPage() {

  return (
    <div className="relative flex flex-col h-screen">
      <SpeedInsights />
      <Analytics />
      <Head />
      <Navbar />
      <main className="container mb-16 flex-grow">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        <h1>About Us</h1>
        <p></p>

        <h1>FAQ</h1>
        <p></p>

        <h1>Privacy</h1>
        <p></p>

      </main>
      <Footer />
    </div>
  );
}
