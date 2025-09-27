import { Image, Card, CardBody, CardHeader } from "@heroui/react";

import DefaultLayout from "@/layouts/default";

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

export default function Community() {
  return (
    <DefaultLayout>
      <Card>
        <Image
          radius="none"
          src={
            "https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/" +
            imageURLs[1]
          }
          style={{ transform: "translateZ(0)" }}
          alt="Background image"
          className="w-full h-full object-cover fixed top-15 left-0 z-[0]"
        />
        <CardBody>
          <Card className="mb-6 self-center">
            <CardHeader className="justify-center">
              <h1 className="text-2xl font-bold">Community</h1>
            </CardHeader>
            <CardBody>
              <b>Rules:</b>
              <ul className="pl-6">
                <li>
                  Be respectful towards others: no insults, personal attacks, or
                  hate speech.
                </li>
                <li>
                  Stay on topic: keep comments related to tramps and planning
                  tramps.
                </li>
                <li>
                  Keep it concise: try to keep your comments under 200
                  characters.
                </li>
                <li>
                  Be clear: avoid using jargon or technical terms that may be
                  unfamiliar to others.
                </li>
                <li>No spamming: no repetitive or unsolicited messages.</li>
                <li>
                  No self-promotion: no posting links or content that is solely
                  for personal gain.
                </li>
              </ul>
            </CardBody>
          </Card>
          {/* Elfsight Comments | Untitled Comments */}
          <script async src="https://elfsightcdn.com/platform.js" />
          <div
            data-elfsight-app-lazy
            className="elfsight-app-77489924-d062-4f80-8872-dfc7ecb2a9d3"
          />
        </CardBody>
      </Card>
    </DefaultLayout>
  );
}
