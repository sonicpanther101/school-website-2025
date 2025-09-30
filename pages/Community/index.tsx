import { Image, Card, CardBody, CardHeader } from "@heroui/react";

import DefaultLayout from "@/layouts/default";
import { useEffect } from "react";

const ElfsightComments: React.FC = () => {
  useEffect(() => {
    // inject platform.js if not present
    if (!document.getElementById("elfsight-script")) {
      const script = document.createElement("script");
      script.id = "elfsight-script";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // selector that matches the badge link Elfsight injects
    const BADGE_SELECTOR = 'a[href*="elfsight.com/comments-widget"]';

    // remove any matching nodes immediately
    const removeBadge = () => {
      try {
        const els = document.querySelectorAll<HTMLAnchorElement>(
          'a[href*="elfsight.com/comments-widget"]'
        );
        els.forEach((el) => {
          if (el instanceof HTMLAnchorElement && el.href.includes("elfsight.com/comments-widget")) {
            el.remove();
          }
        });
      } catch (e) {
        // ignore any DOM exceptions
      }
    };

    // initial attempt
    removeBadge();

    // MutationObserver to catch elements that get added later
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        // if nodes were added or attributes changed, try removing badge
        if (m.addedNodes && m.addedNodes.length > 0) {
          removeBadge();
        }
      }
    });

    observer.observe(document.documentElement || document.body, {
      childList: true,
      subtree: true,
    });

    // polling fallback (some scripts insert things repeatedly); stops after N tries
    let tries = 0;
    const maxTries = 20; // ~20s with 1s interval
    const interval = window.setInterval(() => {
      removeBadge();
      tries += 1;
      if (tries >= maxTries) {
        clearInterval(interval);
      }
    }, 1000);

    // cleanup
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="elfsight-app-77489924-d062-4f80-8872-dfc7ecb2a9d3"
      data-elfsight-app
    />
  );
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

export default function Community() {
  return (
    <DefaultLayout>
      <Card className="overflow-hidden mx-[-1rem]">
        <Image
          radius="none"
          src={
            "https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/" +
            imageURLs[4]
          }
          alt="Background image"
          className="fixed inset-0 w-screen h-screen object-cover z-0"
        />
        <CardBody>
          <Card className="w-full max-w-lg mx-auto mb-6 self-center overflow-hidden">
            <CardHeader className="justify-center overflow-hidden">
              <h1 className="text-5xl sm:text-7xl font-bold">Community</h1>
            </CardHeader>
            <CardBody className="overflow-hidden">
              <b>Rules:</b>
              <ul className="pl-6 list-disc">
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
          <div className="w-full overflow-x-hidden">
            <ElfsightComments />
          </div>
        </CardBody>
      </Card>
    </DefaultLayout>
  );
}
