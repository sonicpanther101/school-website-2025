import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

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

export default function Advice() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-6">
        <Card className="self-center mb-6 p-[10px]">
          <CardHeader className="text-6xl font-bold justify-center">Advice</CardHeader>
        </Card>
        <div className="flex md:flex-row flex-col justify-around gap-6">
          <Image
            isZoomed
            src={
              "https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/" +
              imageURLs[3]
            }
            style={{ transform: "translateZ(0)" }}
            alt="Background image"
            classNames={{
              img: "w-full",
              wrapper: "md:w-[40%] w-full",
            }}
          />
          <div className="grow hidden md:block max-w-[20%]"></div>
          <Card>
            <CardHeader className="text-2xl font-bold justify-center">Personal Gear List</CardHeader>
            <CardBody>
              <ul className="pl-6 list-disc">
                <li>Backpack (40-60 liter size) for multi-day tramping</li>
                <li>Wet or plastic pack liner</li>
                <li>Sleeping bag (3-4 season)</li>
                <li>First aid kit including blister treatment materials</li>
                <li>Map and compass</li>
                <li>Head torch/flashlight and spare batteries</li>
                <li>Rubbish bag - all rubbish must be taken out with you</li>
                <li>Distress beacon</li>
                <li>Survival kit including:</li>
                <ul className="pl-6 list-[disc]">
                  <li>Survival blanket</li>
                  <li>Whistle</li>
                  <li>Paper</li>
                  <li>Pencil</li>
                  <li>High energy snack food</li>
                </ul>
                <li>Emergency shelter (e.g., space blanket)</li>
              </ul>
            </CardBody>
          </Card>
        </div>
        <div className="flex md:flex-row-reverse flex-col justify-around gap-6 items-center">
          <Image
            isZoomed
            src={
              "https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/" +
              imageURLs[0]
            }
            style={{ transform: "translateZ(0)" }}
            alt="Background image"
            classNames={{
              img: "w-full",
              wrapper: "md:w-[40%] w-full",
            }}
          />
          <div className="grow shrink hidden md:block max-w-[20%]"></div>
          <Card className="h-full">
            <CardHeader className="text-2xl font-bold justify-center">Cooking and food equipment</CardHeader>
            <CardBody className="flex  justify-center">
              <ul className="pl-6 list-disc">
                <li>Drink bottle (1-2 liter capacity) - you may need to carry more depending on resupply options</li>
                <li>Equipment to boil water or water treatment tablets</li>
                <li>Gas cooker and fuel, for example, gas canister</li>
                <li>Eating and cooking utensils</li>
                <li>Matches or lighter in waterproof container</li>
              </ul>
            </CardBody>
          </Card>
        </div>
        <div className="flex md:flex-row flex-col justify-around gap-6 items-center">
          <Image
            isZoomed
            src={
              "https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/" +
              imageURLs[4]
            }
            style={{ transform: "translateZ(0)" }}
            alt="Background image"
            classNames={{
              img: "w-full",
              wrapper: "md:w-[40%] w-full",
            }}
          />
          <div className="grow shrink hidden md:block max-w-[20%]"></div>
          <Card className="h-full">
            <CardHeader className="text-2xl font-bold justify-center">Useful Tips</CardHeader>
            <CardBody className="flex  justify-center">
              <ul className="pl-6 list-disc">
                <li>Always check the weather forecast before heading out on a tramp.</li>
                <li>Inform someone about your itinerary and expected return time.</li>
                <li>Carry a fully charged mobile phone and a portable power bank.</li>
                <li>Bring a spare set of clothes, including a waterproof jacket and pants.</li>
                <li>Wear sturdy tramping boots with good grip and ankle support.</li>
                <li>Bring a first aid kit and know how to use the items in it.</li>
                <li>Stay on marked trails and avoid taking shortcuts through private land.</li>
                <li>Bring a water filter or water treatment tablets to ensure safe drinking water.</li>
                <li>Pack snacks and energy-rich foods to keep your energy levels up.</li>
                <li>Bring a headlamp or flashlight in case you need to navigate in the dark.</li>
              </ul>
            </CardBody>
          </Card>
        </div>
        <div className="flex md:flex-row-reverse flex-col justify-around gap-6 items-center">
          <Image
            isZoomed
            src={
              "https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/" +
              imageURLs[7]
            }
            style={{ transform: "translateZ(0)" }}
            alt="Background image"
            classNames={{
              img: "w-full",
              wrapper: "md:w-[40%] w-full",
            }}
          />
          <div className="grow shrink hidden md:block max-w-[20%]"></div>
          <Card className="h-full">
            <CardHeader className="text-2xl font-bold justify-center">More Useful Tips</CardHeader>
            <CardBody className="flex justify-center">
              <ul className="pl-6 list-disc">
                <li>Pack a small repair kit with duct tape, safety pins, and other basic tools.</li>
                <li>Bring a map and compass, and know how to use them.</li>
                <li>Stay hydrated by drinking plenty of water throughout your tramp.</li>
                <li>Bring a small daypack to carry essentials while tramping.</li>
                <li>Take regular breaks to rest and avoid fatigue.</li>
                <li>Be mindful of your surroundings and respect the natural environment.</li>
                <li>Bring a small notebook and pen to record observations or notes.</li>
                <li>Bring a camera or phone to capture memories.</li>
                <li>Be prepared for changing weather conditions and pack accordingly.</li>
                <li>Bring a small emergency shelter, such as a space blanket, in case of unexpected situations.</li>
                <li>Always follow the principles of Leave No Trace and minimise your impact on the environment.</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}
