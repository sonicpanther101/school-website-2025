import { Card, CardHeader, CardBody, Link, Image } from "@heroui/react";

export const Footer = () => {
  return (
    <Card className="flex flex-col sm:flex-row p-[10px] gap-3 flex-none rounded-b-none">
      <Card className="flex-2 bg-background">
        <CardBody className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <Image
              alt="Marlborough tramps logo"
              className="flex-none"
              radius="sm"
              src="https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/Marlborough%20Tramps%20logo%20large.jpg"
              width={100}
            />
            <div className="flex flex-col">
              <p>Contact Us</p>
              <p>
                Email:{" "}
                <Link
                  isExternal
                  showAnchorIcon
                  href="mailto:admin@marlboroughtramps.co.nz"
                  underline="active"
                >
                  admin@marlboroughtramps.co.nz
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col">
              <p>Blenheim Office</p>
              <p>5 Stephenson St</p>
              <p>Blenheim</p>
              <p>
                Cell:{" "}
                <Link
                  isExternal
                  showAnchorIcon
                  href="tel:0215780119"
                  underline="active"
                >
                  021 578 0119
                </Link>
              </p>
            </div>
            <div className="flex flex-col">
              <p>Picton Office</p>
              <p>173 Waikawa Road</p>
              <p>Picton</p>
              <p>
                Cell:{" "}
                <Link
                  isExternal
                  showAnchorIcon
                  href="tel:0215736558"
                  underline="active"
                >
                  021 573 6558
                </Link>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="sm:flex-1 flex-0.85 bg-background">
        <CardBody className="flex gap-3 flex-col ml-4">
          <Link href="https://school-website-2025.vercel.app/#about" underline="active">
            About
          </Link>
          <Link href="https://school-website-2025.vercel.app/#FAQ" underline="active">
            FAQ
          </Link>
          <p className="mt-3 sm:mt-9">Legal</p>
          <Link href="https://school-website-2025.vercel.app/#privacy" underline="active">
            Privacy
          </Link>
        </CardBody>
      </Card>
    </Card>
  );
};
