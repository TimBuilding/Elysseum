import React, { useRef } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { cn } from '@/utils/cn';

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DON'T want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    // 'var(--slate-900)',
    'var(--black)',
    // 'var(--neutral-900)',
  ];
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ];
  return (
    <>
      <p className='mx-24 mb-10 lg:mb-20 text-center opacity-1 sticky lg:relative block bg-black text-5xl lg:text-6xl font-bold text-[#664B93] '>What We Offer</p>
      <div className='flex flex-row justify-center'>
        <motion.div
          animate={{
            background: linearGradients[activeCard % linearGradients.length],
          }}
          className={cn(
            'block w-96 mx-24 lg:hidden bg-red-500 h-72 max-h-2xl mb-20 rounded-md bg-white overflow-hidden',
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>

      </div>
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className='flex-row scrollbar-hide h-[40rem] overflow-y-auto flex justify-center relative lg:space-x-10 ml-0 rounded-md p-20'
        ref={ref}
      >
        <div className='div relative flex items-start lg:text-left'>
          <div className='max-w-xl'>
            {content.map((item, index) => (
              <>
                <div key={item.title + index} className='flex flex-col justify-center my-16 md:my-0 lg:my-16 h-96'>
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className='text-3xl lg:text-4xl font-bold text-[#664B93]'
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className='text-justify lg:text-left text-xl lg:text-lg text-[#E6E6E6] lg:max-w-sm max-w-full mt-8'
                  >
                    {item.description}
                  </motion.p>
                </div>

              </>
            ))}
            <div className='h-60 lg:h-24' />
          </div>
        </div>
        <motion.div
          animate={{
            background: linearGradients[activeCard % linearGradients.length],
          }}
          className={cn(
            'hidden lg:block h-3/4 max-h-2xl w-full max-w-xl rounded-md bg-white sticky top-12 overflow-hidden',
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </motion.div>

    </>
  );
};
