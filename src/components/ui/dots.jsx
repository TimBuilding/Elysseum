import React, { useEffect } from "react";

const DotsComponent = () => {
  useEffect(() => {
    const handleDotClick = (event) => {
      const dots = document.querySelectorAll('.dots li');
      dots.forEach(dot => dot.classList.remove('active'));
      event.target.parentElement.classList.add('active');
    }

    const dots = document.querySelectorAll('.dots li');
    dots.forEach(dot => dot.addEventListener('click', handleDotClick));

    return () => {
      dots.forEach(dot => dot.removeEventListener('click', handleDotClick));
    };
  }, []);

  return (
    <>
      <div className='table w-full h-full bg-gray-900 flex justify-center items-center'>
        <div className='cell'>
          <ul className='dots flex flex-wrap justify-center'>
            <li><a href='#' className="sr-only">Home</a></li>
            <li><a href='#' className="sr-only">About</a></li>
            <li><a href='#' className="sr-only">Products</a></li>
            <li><a href='#' className="sr-only">Portfolio</a></li>
            <li><a href='#' className="sr-only">Blog</a></li>
            <li><a href='#' className="sr-only">Contact</a></li>
          </ul>
        </div>
      </div>

      <style>
        {`
          .dots li {
            @apply relative block float-left mx-4 my-2 cursor-pointer;
          }

          .dots li a {
            @apply block w-full h-full overflow-hidden rounded-full border-2 border-white;
            transition: all 0.3s ease;
          }

          .dots .active a {
            @apply transform scale-125;
          }

          .dots .active a:after {
          }
        `}
      </style>
    </>
  );
};

export default DotsComponent;
