import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './carousel arrow buttons'

type PropType = {
  imageUrls: string[];
  imageAlts: string[];
  options?: EmblaOptionsType;
  delay: number;
  arrows?: boolean;
  name: string;
  description: string;
  footer?: string;
  folder: string;
};

type TrampsPropType = {
  imageUrls: string[];
  imageAlts: string[];
  options?: EmblaOptionsType;
  delay: number;
  arrows?: boolean;
  names: string[];
  descriptions: string[];
  footers: string[];
  folders: string[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { imageUrls, imageAlts, options, delay, arrows, name, description, footer, folder } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: delay })])
  const slides = Array.from(Array(imageUrls.length).keys());

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <div className="relative w-full">
      <h1
        className="text-3xl sm:text-5xl text-center select-none mt-xl"
      >
        {name}
      </h1>

      {/* Carousel wrapper */}
      <div
        className="w-full sm:w-[120%] h-[120vh] overflow-hidden sm:ml-[-10%]"
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((index) => (
            <img
              key={index}
              src={
                "https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/" +
                folder +
                "/" +
                imageUrls[index]
              }
              alt={imageAlts[index]}
              className="flex-1 h-[80vh] object-cover sm:rounded-2xl m-[1rem] shadow-2xl"
            />
          ))}
        </div>

        {/* Navigation arrows */}
        {arrows && (
          <>
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10 hidden sm:block bg-gray-200/65 dark:bg-gray-900/65 rounded-full">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 hidden sm:block bg-gray-200/65 dark:bg-gray-900/65 rounded-full">
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </>
        )}
      </div>

      {/* Card under carousel */}
      <Card className="w-[95%] rounded-2xl m-[2.5%] mt-[-110%] sm:mt-[-90%] md:mt-[-60%] lg:mt-[-30%] shadow-2xl p-sm mb-12">
        <div className="flex-1 basis-[60%]">
          <CardHeader>
            <h2 className="m-lg my-sm font-bold text-xl">Description</h2>
          </CardHeader>
          <CardBody className="min-h-[20vh]">
            {description.split("\\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </CardBody>
          <CardFooter className="text-xs">{footer}</CardFooter>
        </div>
      </Card>
    </div>
  );
};

const TextEmblaCarousel: React.FC<TrampsPropType> = (props) => {
  const { imageUrls, imageAlts, options, delay, arrows, names, descriptions, footers, folders } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: delay })]);
  const slides = Array.from(Array(imageUrls.length).keys());

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div
        className="w-full sm:w-[100%] h-[120vh] overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((index) => (
            <div
              key={index}
              className="flex-none w-full flex flex-col items-center"
            >
              <img
                src={
                  "https://raw.githubusercontent.com/sonicpanther101/school-website-2025/refs/heads/main/Images/" +
                  folders[index] +
                  "/" +
                  imageUrls[index]
                }
                alt={imageAlts[index]}
                className="w-full h-[80vh] object-cover sm:rounded-2xl m-[1rem] shadow-2xl"
              />
              {/* Card under each image */}
              <Card className="w-[70%] sm:w-[95%] rounded-2xl m-[2.5%] mt-[-10%] sm:mt-[-5%] shadow-2xl p-sm mb-12">
                <div className="flex-1 basis-[60%]">
                  <CardHeader>
                    <h1 className="text-3xl sm:text-5xl text-center select-none mt-xl">
                      {names[index]}
                    </h1>
                  </CardHeader>
                  <CardBody>
                    {descriptions[index].split("\\n").map((line, lineIndex) => (
                      <p key={lineIndex}>{line}</p>
                    ))}
                  </CardBody>
                  <CardFooter className="text-xs">{footers[index]}</CardFooter>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {arrows && (
          <>
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10 hidden sm:block bg-gray-200/65 dark:bg-gray-900/65 rounded-full">
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 hidden sm:block bg-gray-200/65 dark:bg-gray-900/65 rounded-full">
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};


export default EmblaCarousel;
export { TextEmblaCarousel };
