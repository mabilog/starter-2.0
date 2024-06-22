import React from "react";
import Main from "./Main";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";
const Hero = ({
  button,
  title,
  description,
  image,
}: {
  button: { text: string; url: string };
  title: string;
  description: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
}) => {
  return (
    <Main>
      <div className="grid grid-cols-4 gap-4 px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="col-span-3 sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">{title}</span>
          </h1>
          {description && (
            <div
              className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
              dangerouslySetInnerHTML={{ __html: description }}
            >
              {/* <RichText content={description} /> */}
            </div>
          )}

          {button?.url ? (
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href={button.url}
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  {button.text}
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {image && (
          <div className="mt-10 sm:mt-0">
            <Image className="height-auto lg:mt-0 " src={image} alt="" />
          </div>
        )}
      </div>
    </Main>
  );
};

export default Hero;
