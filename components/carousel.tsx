import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Image } from "@heroui/react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const imageURLs = [
  "1920-grovetown-vineyard-in-new-zealand.jpg",
  "children.jpg",
  "cliffs.jpg",
  "ferry-4248163_1920.jpg",
  "hiking_landscape_route_da.jpg",
  "hiking-mountain.jpg",
  "mark-de-jong-q8n0lHbqrIE-unsplash.jpg",
  "pelorus_river.jpg",
];

const imageAlts = [
  "grovetown vineyard in new zealand",
  "children",
  "cliffs",
  "ferry",
  "hiking landscape route",
  "hiking mountain",
  "mark de jong unsplash",
  "pelorus river",
];

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 200000 }),
  ]);

  return (
    <section className="w-screen h-screen">
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex touch-action-[pan-y_pinch-zoom] h-full">
          {slides.map((index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 w-full h-full relative"
            >
              <Image
                alt={imageAlts[index]}
                classNames={{
                  img: "w-full h-full object-cover",
                  wrapper: "w-full h-full",
                }}
                radius="none"
                src={
                  "https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/" +
                  imageURLs[index]
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
