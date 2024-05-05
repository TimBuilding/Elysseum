import { imageConfig } from "astro:assets";
import InfiniteMovingCards from "../ui/infinite-moving-cards";
import React from 'react';

const logo = [
  {
    name: 'HHH'
  },
  {
    name: 'III'
  },
  {
    name: 'JJJ'
  },
  {
    name: 'KKK'
  },
  {
    name: 'LLL'
  },
];

function Techno() {
    return (
      <div className="h-72 overflow-hidden rounded-md flex flex-col antialiased items-center justify-center relative">
        <InfiniteMovingCards
          items={logo}
          direction="right"
          speed="slow"
        />
      </div>
    );
  }


export default Techno;