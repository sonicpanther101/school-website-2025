import DefaultLayout from "@/layouts/default";
import EmblaCarousel from "@/components/carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Tramps() {
  return (
    <DefaultLayout>
      <h1>Tramps</h1>
      <EmblaCarousel options={OPTIONS} slides={SLIDES} arrows />
    </DefaultLayout>
  );
}
