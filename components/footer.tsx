import { Card, CardHeader, CardBody, Link, Image } from "@heroui/react";

export const Footer = () => {
  return (
    <Card className="flex flex-col sm:flex-row p-[10px] gap-3 flex-none rounded-b-none">
      <Card className="flex-2">
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
      <Card className="sm:flex-1 flex-0.85">
        <CardHeader>About</CardHeader>
        <CardBody className="flex gap-3 flex-col">
          <Link href="/#about" underline="active">
            About
          </Link>
          <Link href="/#FAQ" underline="active">
            FAQ
          </Link>
        </CardBody>
      </Card>
      <Card className="sm:flex-1 flex-0.75">
        <CardHeader>Legal</CardHeader>
        <CardBody>
          <Link href="/#privacy" underline="active">
            Privacy
          </Link>
        </CardBody>
      </Card>
    </Card>
  );
};
