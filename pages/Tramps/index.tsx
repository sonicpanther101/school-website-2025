import DefaultLayout from "@/layouts/default";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@heroui/react";

const SLIDES = Array.from(Array(8).keys());

const imageURLs = [
  "nydia-bay-hero.jpg",
  "challenging-section-nydia-track-1200.jpg",
  "nydia-bay-1200.webp",
  "stream-flood-nydia-trak-1200.jpg"
];

const imageAlts = [
  "nydia bay hero image",
  "challenging section nydia track",
  "nydia bay",
  "stream flood nydia track",
];

export default function Tramps() {

  const [emblaRef] = useEmblaCarousel({
      loop: true, duration: 50
    }, [Autoplay({ delay: 1500 })])

  return (
    <DefaultLayout>
      <h1>Tramps</h1>

      <div>
        <h1 id="kakapo" className="text-3xl sm:text-5xl text-center select-none mt-xl">Nydia Track</h1>
        <div className="w-full sm:w-[120%] h-[120vh] overflow-hidden sm:ml-[-10%]" ref={emblaRef}>
            <div className="flex">
              {SLIDES.map((index) => (
                <Image
                  src={"https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/Nydia" + [index]} 
                  alt={imageAlts[index]}
                  classNames={{
                    wrapper: "flex-1 m-[1rem] h-[80vh] shadow-2xl sm:rounded-2xl",
                    img: "h-full w-full object-cover sm:rounded-2xl",
                  }}
                />
              ))}
            </div>
        </div>
        <Card className="w-[95%] rounded-2xl m-[2.5%] mt-[-110%] sm:mt-[-30%] shadow-2xl p-sm">
            <div className="flex-1 basis-[60%]">
                <CardHeader>
                    <h2 className="m-lg my-sm font-bold text-xl">Description</h2>
                </CardHeader>
                    <CardBody className="min-h-[20vh]">
                        The 27 km Nydia Track offers walkers and cyclists great views and varied track conditions. Plan on an overnight stop at Nydia Bay where you can explore the history and coastline. The songs of bellbirds and tuī and the sudden “swooshswoosh” of a flying pigeon (kererū) will be heard in the dense, mature forests
                        <br /><br />This track crosses the Kaiuma and Nydia Saddles and follows the sheltered shoreline of historic Nydia Bay. 
                        <br />Formed by linking old bridle paths, it meanders through a variety of forests, some scrubland and farmland. 
                        <br />The 27-kilometre Nydia Track is classified as a tramping track. It is well defined, though rough, narrow and uneven in places. Expect it to take 9.5 hours for fit trampers.
                        <br />The track is mostly unformed with steep, rough or muddy sections. 
                        <br />It is a track for those who are reasonably fit; boots are recommended and it is suitable for people with good fitness. Moderate to high-level backcountry skills and experience (including navigation and survival skills) required. 
                </CardBody>
            </div>
        </Card>
    </div>
    </DefaultLayout>
  );
}
