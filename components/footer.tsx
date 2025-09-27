import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

export const Footer = () => {
  return (
    <Card className="flex flex-col sm:flex-row p-[10px] gap-3 flex-none rounded-b-none">
      <Card className="flex-2">
        <CardBody className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <Image
              className="flex-none"
              alt="Marlborough tramps logo"
              radius="sm"
              src="https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/Marlborough%20Tramps%20logo%20large.jpg"
              width={100}
            />
            <div className="flex flex-col">
              <p>Contact Us</p>
              <p>Email: <Link isExternal showAnchorIcon underline="active" href="mailto:admin@marlboroughtramps.co.nz">admin@marlboroughtramps.co.nz</Link></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col">
              <p>Blenheim Office</p>
              <p>5 Stephenson St</p>
              <p>Blenheim</p>
              <p>Cell: <Link isExternal showAnchorIcon underline="active" href="tel:0215780119">021 578 0119</Link></p>
            </div>
            <div className="flex flex-col">
              <p>Picton Office</p>
              <p>173 Waikawa Road</p>
              <p>Picton</p>
              <p>Cell: <Link isExternal showAnchorIcon underline="active" href="tel:0215736558">021 573 6558</Link></p>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="sm:flex-1 flex-0.85">
        <CardHeader>
          About
        </CardHeader>
        <CardBody className="flex gap-3 flex-col">
          <Link underline="active" href="/#about">
            About
          </Link>
          <Link underline="active" href="/#FAQ">
            FAQ
          </Link>
        </CardBody>
      </Card>
      <Card className="sm:flex-1 flex-0.75">
        <CardHeader>
          Legal
        </CardHeader>
        <CardBody>
          <Link underline="active" href="/#privacy">
            Privacy
          </Link>
        </CardBody>
      </Card>
    </Card>
  );
};