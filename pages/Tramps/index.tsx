import DefaultLayout from "@/layouts/default";
import EmblaCarousel from "@/components/carousel";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@heroui/react";

const nydiaImageURLs = [
  "nydia-bay-hero.jpg",
  "challenging-section-nydia-track-1200.jpg",
  "nydia-bay-1200.webp",
  "stream-flood-nydia-trak-1200.jpg"
];

const nydiaImageAlts = [
  "nydia bay hero image",
  "challenging section nydia track",
  "nydia bay",
  "stream flood nydia track",
];

const quailImageURLs = [
  "_OSL9608.jpg",
  "EOSL8486-1121-2.jpg",
  "Repetition.jpg",
  "Sunset11.jpg",
  "wither fields.jpg",
  "Wither Hills.jpg"
];

const quailImageAlts = [
  "water tank",
  "looking up the hill",
  "sunset",
  "looking at blenheim from wither hills",
  "wither fields",
  "Wither Hills",
];

const lagoonImageURLs = [
  "wairau-lagoon-1920.jpg",
  "wairau-lagoon-2-1200.jpg",
  "wairau-lagoon-3-1200.jpg",
  "wairau-lagoon-children-1200.jpg",
  "wairau-lagoon-walkway-1200.webp"
];

const lagoonImageAlts = [
  "wairau lagoon shipwreck",
  "wairau lagoon",
  "wairau lagoon",
  "wairau lagoon children",
  "wairau lagoon walkway",
];

export default function Tramps() {

  return (
    <DefaultLayout>
      <h1>Tramps</h1>

      <EmblaCarousel imageUrls={nydiaImageURLs} imageAlts={nydiaImageAlts} folder="Nydia" delay={2500} options={{ loop: true, duration: 50 }} name="Nydia Track" description="
            The 27 km Nydia Track offers walkers and cyclists great views and varied track conditions. Plan on an overnight stop at Nydia Bay where you can explore the history and coastline. The songs of bellbirds and tuī and the sudden “swooshswoosh” of a flying pigeon (kererū) will be heard in the dense, mature forests
          \nThis track crosses the Kaiuma and Nydia Saddles and follows the sheltered shoreline of historic Nydia Bay. 
          \nFormed by linking old bridle paths, it meanders through a variety of forests, some scrubland and farmland. 
          \nThe 27-kilometre Nydia Track is classified as a tramping track. It is well defined, though rough, narrow and uneven in places. Expect it to take 9.5 hours for fit trampers.
          \nThe track is mostly unformed with steep, rough or muddy sections. 
          \nIt is a track for those who are reasonably fit; boots are recommended and it is suitable for people with good fitness. Moderate to high-level backcountry skills and experience (including navigation and survival skills) required.
        " footer="Image Source (Creative Commons): Department of Conservation"
      />
      <EmblaCarousel imageUrls={quailImageURLs} imageAlts={quailImageAlts} folder="Quail" delay={2500} options={{ loop: true, duration: 50 }} name="Quail Stream Walk" description="
            Discover this 8.5-km loop trail near Blenheim, Marlborough. Generally considered a moderately challenging route, it takes an average of 2 h 43 min to complete
          \nForest Park Drive Entrance
          \nThe Forest Park Drive car park provides a central point to access the park. It is possible to take the track east to Redwood Street, or follow Quail Stream south. 
          \nThe Quail Stream track is flat initially, but at the end of the track there is the opportunity to climb to form a loop with the tracks that start from the Rowan Place park entrance. The track passes through a variety of exotic tree plantings including pine, willow, acacia and more.
        " footer="Image Source (Creative Commons): Wither Fields by life in still - Repetition, _OSL9608, Sunset11, EOSL8486-1121-2, Wither Hills by Ricky Wilson"
      />
      <EmblaCarousel imageUrls={lagoonImageURLs} imageAlts={lagoonImageAlts} folder="Lagoon" delay={2500} options={{ loop: true, duration: 50 }} name="Wairau Lagoons" description="
            Features: From Blenheim town centre this walk is 7km. This is one of a few places along the eastern coast of the South Island where it is possible to enjoy the richness and unique beauty of a large estuary. Many species of birds nest here and a bird book and binoculars are useful additional equipment to take! At the lagoons’ main channel the rusting hulk of the Waverley sits in the mud. There is also an interesting human history of early moa-hunter activity, Maori food gathering and later coastal trading. 
          \nWhere: Wairau Lagoons Reserve, 7km southeast of Blenheim. 
          \nWalking Time: Lagoon loop track from car park 3 hour circuit (8km) Plus side-track from “Waverley” wreck 45 minutes return (2km) 
          \nGrade: Walking track — virtually flat (not recommended after heavy rain as surface water can be ankle deep in places, nor in very hot or windy weather as this is an extremely exposed area).
        " footer="Image Source (Creative Commons): Wairau Lagoons Walkway, Wairau Lagoons Children by Benhi Dixon - Wairau Lagoons Walkway, Rusting remains of the Waverley ship on the Wairau Lagoons Walkway by Ricky Wilson"
      />
    </DefaultLayout>
  );
}
