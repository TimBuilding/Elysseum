import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal.jsx';

const content = [
  {
    title: 'IT Strategy & Planning',
    description:
      'We work closely with businesses to develop IT strategies that align with their objectives. For instance, we helped our client assess their current IT infrastructure, identify areas for improvement, and create a roadmap to enhance efficiency and productivity.',
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
        Collaborative Editing
      </div>
    ),
  },
  {
    title: 'Digital Transformation',
    description:
      'We guide organizations through digital transformation by helping them adopt new technologies and reshape their business processes. Our expertise includes cloud computing, automation, data analytics, and emerging technologies.',
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        {/* <img
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        /> */}
      </div>
    ),
  },
  {
    title: 'IT Infrastructure Design & Implementation',
    description:
      "We design and implement robust and scalable IT infrastructures tailored to our clients' needs. This includes network architecture, hardware and software selection, cybersecurity measures, and disaster recovery planning.",
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white'>
        Version control
      </div>
    ),
  },
  {
    title: 'Cybersecurity',
    description:
      'We provide comprehensive cybersecurity services to protect businesses from evolving threats. This includes risk assessments, vulnerability assessments, security audits, implementation of security controls, employee training, incident response, and ongoing monitoring.',
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
        Running out of content
      </div>
    ),
  },
  {
    title: 'IT Project Management',
    description:
      'We manage IT projects from initiation to completion, ensuring successful implementation within scope, budget, and timeline. Our project management approach includes effective communication, stakeholder engagement, risk management, and quality assurance.',
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
        Running out of content
      </div>
    ),
  },
  {
    title: 'IT Support & Maintenance',
    description:
      "We offer ongoing IT support services to keep our clients' systems running smoothly. This includes help desk support, troubleshooting, system updates, performance monitoring, and proactive maintenance.",
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
        Running out of content
      </div>
    ),
  },
  {
    title: 'IT Training & Education',
    description:
      "We provide training programs and workshops to empower our clients' employees with the necessary IT skills and knowledge. This includes technology adoption training, cybersecurity awareness, and best practices for optimizing productivity.",
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
        Running out of content
      </div>
    ),
  },
];

const Services = () => {
  return (
    <div className={'py-20 w-full relative'}>
      <StickyScroll content={content} />
    </div>
  );
};

export default Services;