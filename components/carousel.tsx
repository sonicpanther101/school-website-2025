import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Image } from '@heroui/react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const imageURLs = [
  "1920-grovetown-vineyard-in-new-zealand.jpg",
  "children.jpg",
  "cliffs.jpg",
  "ferry-4248163_1920.jpg",
  "green_hills.jpg",
  "hiking_landscape_route_da.jpg",
  "hiking-mountain.jpg",
  "mark-de-jong-q8n0lHbqrIE-unsplash.jpg",
  "mountain_hiking_hike_hiking_0.jpg",
  "pelorus_river.jpg",
  "rivers_streams_coastline_shoreline.jpg",
  "stream_barren_scenery.jpg",
  "streams_moss_water_forests.jpg",
  "wine-1889762_1280.jpg",
]

const imageAlts = [
  "grovetown vineyard in new zealand",
  "children",
  "cliffs",
  "ferry",
  "green hills",
  "hiking landscape route",
  "hiking mountain",
  "mark de jong unsplash",
  "mountain hiking hike hiking ",
  "pelorus river",
  "rivers streams coastline shoreline",
  "stream barren scenery",
  "streams moss water forests",
  "wine ",
]

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="max-w-[48rem] m-auto [--slide-height:19rem] [--slide-spacing:1rem] [--slide-size:100%]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-action-[pan-y_pinch-zoom] ml-[calc(var(--slide-spacing)*-1)]">
          {slides.map((index) => (
            <div className="transform translate-x-0 translate-y-0 translate-z-0 flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)]" key={index}>
              <div className="[box-shadow:inset_0_0_0_0.2rem_var(--detail-medium-contrast)] rounded-[1.8rem] text-[4rem] font-semibold flex items-center justify-center h-[var(--slide-height)] select-none">
                <Image
                  alt={imageAlts[index]}
                  radius="sm"
                  src={"https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/" + imageURLs[index]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel