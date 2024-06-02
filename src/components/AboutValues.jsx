import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutValues = () => {
  const values = [
    {
      title: 'Client-Centric Approach',
      subtitle:
        'We believe in building solid and long-lasting partnerships with our clients.',
      text: 'By truly understanding their unique challenges, goals, and requirements, we tailor our solutions to meet their specific needs. We collaborate, working closely with our clients to develop strategies that align with their business objectives and deliver measurable results.',
      path: 'src/images/ClientCentric.svg',
      alt: '',
    },
    {
      title: 'Innovation & Continuous Learning',
      subtitle:
        'We are passionate about exploring emerging technologies, industry trends, and best practices.',
      text: 'In the ever-evolving world of technology, staying ahead requires a relentless pursuit of innovation and continuous learning. At Elysseum, we provide our clients with the most up-to-date solutions and recommendations, ensuring they remain at the forefront of technological advancements.',
      path: 'src/images/Innovation.svg',
      alt: ''
    },
    {
      title: 'Commitment to Quality & Security',
      subtitle:
        'We are committed to delivering the highest quality and security in everything we do.',
      text: " Our team adheres to industry best practices, rigorous quality standards, and the latest cybersecurity protocols. We prioritize protecting our clients' sensitive data and systems and implementing robust security measures to safeguard against threats and vulnerabilities.",
      path: 'src/images/Security.svg',
      alt: ''
    },
    {
      title: 'Exceptional Customer Service',
      subtitle:
        "We value open and transparent communication, actively listening to our clients' needs, and responding promptly to their inquiries.",
      text: 'At the heart of our business is a dedication to providing exceptional customer service. Our team is friendly, approachable, and committed to ensuring a positive experience throughout every engagement.',
      path: 'src/images/CustomerService.svg',
      alt: ''
    },
  ];

  return (
    <div className='space-y-20 sm:max-w-xl xl:space-y-0 xl:grid grid-cols-2 xl:gap-10 mx-24 mb-10 xl:max-w-5xl'>
      {values.map((value, index) => (
        <div key={`content-${index}`}>
          <div class='mx-auto flex w-full items-center justify-center'>
            <div class='relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]'>
              <div class='animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]'></div>
              <div class='relative z-20 w-full rounded-[0.60rem] h-[600px] bg-black p-8 pb-10 flex flex-col items-center justify-center'>
                <img
                  src={value.path}
                  alt={value.alt}
                  className='h-full w-full object-cover mb-8 '
                />
                <div className="px-2 sm:px-6 text-white">
                  <p className="text-xl sm:text-4xl font-semibold text-[#664b93]">{value.title}</p>
                  <p className="my-4 text-sm sm:text-xl font-medium">{value.subtitle}</p>
                  <p className="text-xs sm:text-lg text-justify leading-6">{value.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutValues;
