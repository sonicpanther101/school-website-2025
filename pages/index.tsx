import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Card, CardHeader, CardBody, CardFooter, Button, HeroUIProvider, Image, Link } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";

import { useState } from "react";

import { Head } from "@/layouts/head";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { showEmailModalToast } from "@/components/toaster";

import { TextEmblaCarousel } from "@/components/carousel";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react';

const trampsImageURLs = [
  "nydia-bay-hero.jpg",
  "EOSL8486-1121-2.jpg",
  "wairau-lagoon-2-1200.jpg",
]

const trampsImageAlts = [
  "nydia bay hero image",
  "looking up the hill",
  "wairau lagoon",
]

const trampsNames = [
  "Nydia Bay",
  "Quail",
  "Wairau Lagoon"
]

const trampsDescriptions = [
  "The 27 km Nydia Track offers walkers and cyclists great views and varied track conditions. Plan on an overnight stop at Nydia Bay where you can explore the history and coastline. The songs of bellbirds and tuī and the sudden “swooshswoosh” of a flying pigeon (kererū) will be heard in the dense, mature forests\\nThis track crosses the Kaiuma and Nydia Saddles and follows the sheltered shoreline of historic Nydia Bay.",
  "Discover this 8.5-km loop trail near Blenheim, Marlborough. Generally considered a moderately challenging route, it takes an average of 2 h 43 min to complete\\nForest Park Drive Entrance\\nThe Forest Park Drive car park provides a central point to access the park. It is possible to take the track east to Redwood Street, or follow Quail Stream south.",
  "Features: From Blenheim town centre this walk is 7km. This is one of a few places along the eastern coast of the South Island where it is possible to enjoy the richness and unique beauty of a large estuary. Many species of birds nest here and a bird book and binoculars are useful additional equipment to take! At the lagoons' main channel the rusting hulk of the Waverley sits in the mud."
]

const trampsFolders = [
  "Nydia",
  "Quail",
  "Lagoon"
]

const trampsFooters = [
  "Image Source (Creative Commons): Department of Conservation",
  "Image Source (Creative Commons): EOSL8486-1121-2 by Ricky Wilson",
  "Image Source (Creative Commons): Wairau Lagoons by Ricky Wilson"
]

export default function IndexPage() {

  const [emblaRef] = useEmblaCarousel({
    loop: true, duration: 30
  }, [Autoplay({ delay: 4000 })])

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

  const SLIDES = Array.from(Array(8).keys());

  return (
    <div className="relative flex flex-col h-screen w-full overflow-x-hidden">
      <SpeedInsights />
      <Analytics />
      <Head />
      <Navbar />
      <main className="mb-16 flex-grow self-center"><HeroUIProvider>
        <ToastProvider placement={"bottom-center"} />
        <div className="absolute w-full h-screen z-10 flex flex-col justify-center items-center">
          <Card className="p-[10px] rounded-3xl">
            <CardHeader><h1 className="text-5xl md:text-7xl font-black text-center select-none">Marlborough Tramps</h1></CardHeader>
            <CardBody><h2 className="mt-4 text-lg md:text-2xl text-center select-none">Join the club and discover your local tramps.</h2></CardBody>
            <CardFooter className="flex justify-center"><Button color="primary" size="lg" className="shadow-lg text-2xl" onPress={showEmailModalToast}>Join Now</Button></CardFooter>
          </Card>
        </div>

        <div className="w-full h-screen overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {SLIDES.map((index) => (
              <div className="flex-[0_0_100%] h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/${imageURLs[index]}')` }}></div>
            ))}
          </div>
        </div>

        <Card className="mx-6 sm:mx-10 my-6" id="about">
          <CardHeader className="text-2xl font-bold">About</CardHeader>
          <CardBody>
            This website serves as a platform for a tramping club, providing
            members with a space to find and organise local group tramps, share
            track information, and connect with the tramping community. Designed
            specifically for outdoor enthusiasts, trampers, and nature lovers, the
            website offers a user-friendly interface to facilitate easy
            communication and collaboration among members. It allows users to
            search for upcoming tramps, view detailed track information, and
            join or create groups for specific tramping interests. The website
            also includes features such as event calendars, forums for
            discussions, and a member directory to foster a sense of community
            among tramping enthusiasts.
          </CardBody>
        </Card>

        <Card className="mx-6 sm:mx-10" id="FAQ">
          <CardHeader className="text-2xl font-bold">FAQ</CardHeader>
          <CardBody className="inline">
            <b>Q:</b> What is the purpose of the website?
            <br />
            <b>A:</b> The purpose of the website is to provide a platform for
            members to find and organise local group tramps, share track
            information, and connect with the tramping community.
            <br />
            <br />
            <b>Q:</b> How can I join?
            <br />
            <b>A:</b> You can <Link
                  onPress={showEmailModalToast}
                  
                  underline="active"
                >
                  join
                </Link> the club by registering an email to our
            mailing list.
            <br />
            <br />
            <b>Q:</b> How can I contact the website owner?
            <br />
            <b>A:</b> You can contact the website owner by email at{" "}
            <Link
                  href="mailto:admin@marlboroughtramps.co.nz"
                  isExternal
                  showAnchorIcon
                  underline="active"
                >
                  admin@marlboroughtramps.co.nz
                </Link>
            .
            <br />
            <br />
            <b>Q:</b> Can I use the website to promote my group tramp?
            <br />
            <b>A:</b> Yes, you can use the website to promote your group tramp
            by posting it on our website under the <Link
                  href="/Community"
                  underline="active"
                >
                  Community
                </Link> section.
          </CardBody>
        </Card>

        <Card className="mx-6 sm:mx-10 mt-7">
          <CardHeader className="text-4xl font-bold justify-center">Tramping Advice</CardHeader>
          <CardBody className="flex sm:flex-row-reverse flex-col justify-around gap-6 items-center">
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
                wrapper: "sm:w-[40%] w-full",
              }}
            />
            <div className="grow shrink hidden sm:block max-w-[20%]"></div>
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
          <CardFooter className="flex justify-center">
            <Button color="primary" size="lg" className="text-xl" onPress={() => window.location.href = "/Advice"}>Learn More</Button>
          </CardFooter>
        </Card>

        <Card className="mx-6 sm:mx-10 mt-7" id="Privacy">
          <CardHeader className="text-2xl font-bold">Privacy Policy</CardHeader>
          <CardBody>
            <p>
              We value your privacy and are committed to protecting your
              personal information. This Privacy Policy outlines how we collect,
              use, and disclose your information when you use our website.
            </p>
            <br />
            <p>
              <b>Information Collection:</b> We may collect personal information
              such as your name, email address, and any other information you
              choose to provide when you interact with our website.
            </p>
            <br />
            <p>
              <b>Information Use:</b> We use the collected information to
              provide and improve our services, respond to your inquiries, and
              communicate with you about tramps and group tramps.
            </p>
            <br />
            <p>
              <b>Information Sharing:</b> We do not sell, trade, or share your
              information with third parties without your consent, except when
              required by law or to protect our rights.
            </p>
            <br />
            <p>
              <b>Information Security:</b> We implement reasonable security
              measures to protect your information from unauthorised access,
              disclosure, or alteration.
            </p>
          </CardBody>
        </Card>
      </HeroUIProvider></main>
      <Footer />
    </div>
  );
}
