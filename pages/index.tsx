import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Card, CardHeader, CardBody } from "@heroui/react";

import { Head } from "@/layouts/head";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react';

export default function IndexPage() {

  const [emblaRef] = useEmblaCarousel({
    loop: true, duration: 50
  }, [Autoplay({ delay: 3000 })])

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

  const SLIDES = Array.from(Array(8).keys());

  return (
    <div className="relative flex flex-col h-screen">
      <SpeedInsights />
      <Analytics />
      <Head />
      <Navbar />
      <main className="mb-16 flex-grow self-center">
        <div className="w-full h-screen overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {SLIDES.map((index) => (
              <div className="flex-[0_0_100%] h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/${imageURLs[index]}')` }}></div>
            ))}
          </div>
        </div>

        <Card className="m-6" id="about">
          <CardHeader className="text-2xl font-bold">About</CardHeader>
          <CardBody>
            This website serves as a platform for a tramping club, providing
            members with a space to find and organize local group tramps, share
            track information, and connect with the tramping community. Designed
            specifically for outdoor enthusiasts, hikers, and nature lovers, the
            website offers a user-friendly interface to facilitate easy
            communication and collaboration among members. It allows users to
            search for upcoming tramps, view detailed track information, and
            join or create groups for specific hiking interests. The website
            also includes features such as event calendars, forums for
            discussions, and a member directory to foster a sense of community
            among tramping enthusiasts.
          </CardBody>
        </Card>

        <Card className="m-6" id="FAQ">
          <CardHeader className="text-2xl font-bold">FAQ</CardHeader>
          <CardBody className="inline">
            <b>Q:</b> What is the purpose of the website?
            <br />
            <b>A:</b> The purpose of the website is to provide a platform for
            members to find and organize local group tramps, share track
            information, and connect with the tramping community.
            <br />
            <br />
            <b>Q:</b> How can I join?
            <br />
            <b>A:</b> You can join the club by registering an email to our
            mailing list.
            <br />
            <br />
            <b>Q:</b> How can I contact the website owner?
            <br />
            <b>A:</b> You can contact the website owner by email at{" "}
            <a href="mailto:admin@marlboroughtramps.co.nz">
              admin@marlboroughtramps.co.nz
            </a>
            .
            <br />
            <br />
            <b>Q:</b> Can I use the website to promote my group tramp?
            <br />
            <b>A:</b> Yes, you can use the website to promote your group tramp
            by posting it on our website under the {'"'}Community{'"'} section.
          </CardBody>
        </Card>

        <Card className="m-6" id="Privacy">
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
              measures to protect your information from unauthorized access,
              disclosure, or alteration.
            </p>
          </CardBody>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
