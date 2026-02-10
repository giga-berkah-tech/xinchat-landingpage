"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { GroupButton } from "../Hero/GroupButton";
import chatPic1 from "@/images/ss-chat.jpg";
import chatPic2 from "@/images/ss-contact.jpg";
import chatPic3 from "@/images/ss-profile.jpg";
import phoneFrame from "@/images/phone-frame.png";
import { useState, useEffect } from "react";

const AboutSectionOne = () => {
  const screenshots = [chatPic1, chatPic2, chatPic3];
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % screenshots.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* TEXT — 8/12 */}
            <div className="w-full px-4 lg:w-8/12">
              <SectionTitle
                title="Enhance Your Communication
with Seamless Connectivity"
                paragraph="Experience XinLeo your way download it to your device. Select your preferred version and start connecting instantly."
                mb="44px"
              />
              <div className="flex flex-row gap-2">
                <GroupButton web={false} />
              </div>
            </div>

            {/* IMAGE — 4/12 */}
            {/* <div className="w-full px-4 lg:w-4/12">
              <div className="relative mx-auto max-w-[350px]">
                <Image
                  src={chatPic}
                  alt="XinChat App Preview"
                  width={300}
                  height={600}
                  className="drop-shadow-three mx-auto"
                />
              </div>
            </div> */}

            <div className="w-full px-4 lg:w-4/12">
              <div className="relative mx-auto hidden max-w-[350px] md:block">
                {/* --- SLIDING SCREENSHOT --- */}
                <Image
                  key={index}
                  src={screenshots[index]}
                  alt="Chat Screen"
                  width={700}
                  height={1061}
                  className={`animate-fade-in absolute top-[20px] left-1/2 z-0 -translate-x-1/2 -translate-y-17 scale-x-90 scale-y-81 transition-all duration-700 ease-out`}
                />

                {/* --- STATIC PHONE FRAME --- */}
                <Image
                  src={phoneFrame}
                  alt="Phone Frame"
                  width={500}
                  height={1000}
                  className="pointer-events-none relative z-10 mx-auto object-fill select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
