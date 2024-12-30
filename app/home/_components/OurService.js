"use client";
import Image from "next/image";
import { useState } from "react";
import Text from "@/components/Text";

const ServicesDetails = [
  {
    image: "/images/CryptoWallet.svg",
    heading: "Web Development",
    paragraph: "AI solutions that grow with your business demands.",
  },
  {
    image: "/images/Mobile.svg",
    heading: "Mobile App Development",
    paragraph: "Scalable apps to elevate your business.",
  },
  {
    image: "/images/Cloud.svg",
    heading: "Cloud Solutions",
    paragraph: "Secure cloud-based solutions for enhanced performance.",
  },
  {
    image: "/images/AI.svg",
    heading: "AI & Machine Learning",
    paragraph: "Smart solutions to simplify complex challenges.",
  },
];

const hoverImages = [
  "/images/CryptoWallet-Light.svg",
  "/images/Mobile-Light.svg",
  "/images/Cloud-Light.svg",
  "/images/AI-Light.svg",
];

function SerivceInfo({ heading, paragraph, image, setImage, index }) {
  return (
    <div
      className="flex justify-between border border-black items-center hover:border-border-color 
      hover:border hover:bg-button-bg px-8 py-4 rounded-[2rem] gap-2"
      onMouseOver={() =>
        setImage((prev) => ({ ...prev, [index]: hoverImages[index] }))
      }
      onMouseOut={() => setImage((prev) => ({ ...prev, [index]: null }))}
    >
      <div className="flex justify-center items-center gap-2">
        <Image src={image} width={80} height={80} alt={heading} />
        <div>
          <div className="text-base">{heading}</div>
          <Text className="text-sm text-text-color w-[95%]">{paragraph}</Text>
        </div>
      </div>
      <div className="hover:block">
        <Image
          src="/images/CTA Button.svg"
          width={30}
          height={30}
          alt="button cta"
        />
      </div>
    </div>
  );
}

export default function OurService() {
  const [image, setImage] = useState({ 0: null });

  return (
    <div className="mt-8 text-white flex flex-col lg:flex-row justify-center gap-4">
      <div className="basis-1/3">
        <h1 className="text-white font-semibold text-3xl pb-10">
          Our Core <span className="text-text-color">SERVICES</span>
        </h1>
        <div className="mb-8">
          <h5 className="text-xl font-semibold">Tailored Solutions</h5>
          <p className="text-base font-normal">for all your business needs</p>
        </div>

        <div className="font-thin text-base mb-10">
          <h6>Your Vision, Our Expertise</h6>
          <p>
            {" "}
            At Spectro Nova, we specialize in crafting cutting-edge software
            solutions tailored to meet your business needs. From robust web
            applications to scalable mobile platforms,
          </p>

          <h6 className="capitalize font-semibold ">
            our team of experts deliversexcellence, innovation, and efficiency.
          </h6>
        </div>
      </div>

      <div>
        {ServicesDetails.map((data, index) => {
          return (
            <SerivceInfo
              key={`servicedetails-${index}`}
              image={image[index] || data.image}
              heading={data.heading}
              paragraph={data.paragraph}
              setImage={setImage}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
