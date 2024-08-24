import { imageConfig } from "astro:assets";
import InfiniteMovingImages from "../ui/infinite-moving-cards";
import React from 'react';

const logoImages = [
  '/images/tech.svg',
  '/images/tech.svg',
  '/images/tech.svg',
  '/images/tech.svg',
  '/images/tech.svg',
];

const Techno = () => {
  return (
    <div className="w-full overflow-hidden pt-6 pb-10 rounded-md flex flex-col antialiased items-center justify-center relative">
      <InfiniteMovingImages
        imagePaths={logoImages}
        direction="left"
        speed="fast"
        class
      />
    </div>
  );
};

export default Techno;