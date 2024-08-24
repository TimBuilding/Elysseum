import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal.jsx';

const content = [
  {
    title: 'IT Strategy & Planning',
    description:
      'We work closely with businesses to develop IT strategies that align with their objectives. For instance, we helped our client assess their current IT infrastructure, identify areas for improvement, and create a roadmap to enhance efficiency and productivity.',
    content: (
      <img className={'h-full'} src='/images/Serv1.svg' />
    ),
    alt: 'Business people pointing at tablet'
  },
  {
    title: 'Digital Transformation',
    description:
      'We guide organizations through digital transformation by helping them adopt new technologies and reshape their business processes. Our expertise includes cloud computing, automation, data analytics, and emerging technologies.',
    content: (
      <img className={'h-full'} src='/images/Serv2.svg' />
    ),
    alt: 'Man using tablet at work to connect with others'
  },
  {
    title: 'IT Infrastructure Design & Implementation',
    description:
      "We design and implement robust and scalable IT infrastructures tailored to our clients' needs. This includes network architecture, hardware and software selection, cybersecurity measures, and disaster recovery planning.",
    content: (
      <img className={'h-full'} src='/images/Serv3.svg' />
    ),
    alt: 'Women working hard together'
  },
  {
    title: 'Cybersecurity',
    description:
      'We provide comprehensive cybersecurity services to protect businesses from evolving threats. This includes risk assessments, vulnerability assessments, security audits, implementation of security controls, employee training, incident response, and ongoing monitoring.',
    content: (
      <img className={'h-full'} src='/images/Serv4.svg' />
    ),
    alt: 'Standard quality control'
  },
  {
    title: 'IT Project Management',
    description:
      'We manage IT projects from initiation to completion, ensuring successful implementation within scope, budget, and timeline. Our project management approach includes effective communication, stakeholder engagement, risk management, and quality assurance.',
    content: (
      <img className={'h-full'} src='/images/Serv5.svg' />
    ),
    alt: 'Business lady watching presentation'
  },
  {
    title: 'IT Support & Maintenance',
    description:
      "We offer ongoing IT support services to keep our clients' systems running smoothly. This includes help desk support, troubleshooting, system updates, performance monitoring, and proactive maintenance.",
    content: (
      <img className={'h-full'} src='/images/Serv6.svg' />
    ),
    alt: 'Side view of male technician using digital tablet'
  },
  {
    title: 'IT Training & Education',
    description:
      "We provide training programs and workshops to empower our clients' employees with the necessary IT skills and knowledge. This includes technology adoption training, cybersecurity awareness, and best practices for optimizing productivity.",
    content: (
      <img className={'h-full'} src='/images/Serv7.svg' />
    ),
    alt: 'Mentor working in modern office'
  },
];

const Services = () => {
  return (
    <div className={'py-10 w-full relative'}>
      <StickyScroll content={content} />
    </div>
  );
};

export default Services;