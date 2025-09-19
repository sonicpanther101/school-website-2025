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

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 14
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function IndexPage() {

  return (
    <DefaultLayout>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />      
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />      
    </DefaultLayout>
  );
}
