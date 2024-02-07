import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/f1.jpg';
import gasImg from '~/assets/images/gas.avif';
import bcImg from '~/assets/images/bc.jpg';
import bc2Img from '~/assets/images/bc2.jpg';
import bc3Img from '~/assets/images/bc3.webp';
import bc4Img from '~/assets/images/bc4.webp';

import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'Great companies are made by great people',
  subtitle:
    'Our hospital is founded on the principles of providing excellence in one place and since our beginnings almost 8 years ago, we have been dedicated to building teams of experts supported by world-class medical resources',
  tagline: '',
  callToAction: {
    text: 'Book an Appointment',
    href: 'https://www.linkedin.com/',
    targetBlank: true,
  },
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Hero TailNext',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    {
      title: 13269,
      description: 'Patient Encounters',
    },
    {
      title: 24,
      description: 'Health Expos',
    },
    {
      title: 1767,
      description: 'Preventative Procedures',
    },
    {
      title: 4000,
      description: 'Clients',
    },
  ],
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our mission',
    subtitle:
      'To provide outstanding patient centered compassionate, accessible, high quality, cost effective healthcare to the cummunity and Zimbabwe at large.',
    tagline: '',
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Our values',
    subtitle: '',
  },
  isAfterContent: true,
  columns: 2,
  items: [
    {
      title: 'Compassion',
      description: 'We demonstate our sincere compassion at all times',
      icon: IconUser,
    },
    {
      title: 'Teamwork',
      description:
        'We recognize, embrace and capitalize on the unique talent of everyone.',
      icon: IconBulb,
    },
    {
      title: 'Trustworthy',
      description: 'We are with integrity and honourin all situations',
      icon: IconThumbUp,
    },
    {
      title: 'Stewardship',
      description: 'We are prudent, careful and deliberate with all resource',
      icon: IconAdjustments,
    },
    {
      title: 'Foresight',
      description:
      'We will anticipate the challanges tomorrow may bring and develop new innovative ways to inspire healthier communities',
      icon: IconHeartHandshake,
    },
   
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: 'History of WMC',
    subtitle:
      'The original WMC Hospital was designed by the Boston architectural firm of Cabot and Chandler, which completed the initial plans prepared by architect J Kanongara.',
    tagline: '',
  },
  items: [
    {
      title: 'Our foundation',
      description:
        "Through the years, WMC employees have rubbed the statue's toes in passing, and patients often pray before it. “The Divine Healer” has become a symbol of compassion and hope",
      icon: IconNumber1,
    },
    {
      title: 'The early years',
      description:
        'The day the hospital opened, Billings expressed satisfaction with what he, Niernsee and the builders had accomplished as he addressed a gathering of about 600 for the unveiling.',
      icon: IconNumber2,
    },
    {
      title: 'Growth',
      description:
        'Today, The Johns Hopkins Hospital complex sprawls over 22 acres. Some 74 elevators connect medical units stacked up to 15 stories high, with infection controlled through means more sophisticated than anything Billings could imagine.',
      icon: IconNumber3,
    },
    {
      title: 'Expanding horizons',
      description:
        "On the terrace just outside the Broadway entrance stands another object that has taken on similar, though lesser, ",
      icon: IconNumber4,
    },
    {
      title: 'Our ongoing commitment',
      description:
        "One of Adolf Meyer's more prominent psychiatric patients credits a sundial, designed by Albert Crehore of Yonkers, N.Y.,",
      icon: IconNumber5,
    },
  ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Our promise to you',
    subtitle:
      'We work together as one to provide a more complete kind of care, in the heart of Waterfalls',
    tagline: '',
  },
  items: [
    {
      title: 'Our quality care',
      description: 'We pride ourselves on the unique patient experience and quality of care we provide at The London Clinic, which sets our hospital apart.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Creativity and design excellence',
      description: 'We also invest in state-of-the-art facilities and medical technologies so we can offer ground-breaking treatments in specialist treatment units. These multi-accredited treatment centres are at the heart of The London Clinic.',
      icon: IconPalette,
    },
    {
      title: 'It’s all about you',
      description: 'Exceptional patient care is a way of life for us. Our nurses, clinicians and support teams are dedicated to the care of a very small number of patients, so we have more time to care. This includes dedicated after-care teams and many extra touches that aren’t available in other hospitals.',
      icon: IconBook,
    },
 
    
  ],
};

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  header: {
    title: 'Our record of excellence',
    subtitle:
      'Etiam lobortis elementum ornare. Vestibulum lacinia magna ut eleifend facilisis. Cras ac mi nec diam auctor dictum.',
    tagline: '',
  },
  columns: 1,
  items: [
  ]
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: false,
  header: {
    title: 'Meet our executive team',
    subtitle:
      '',
    tagline: '',
  },
  teams: [
    {
      name: 'DR B Maisiri',
      occupation: 'Family Doctor',
      image: {
        src: bcImg,
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Sister Betty',
      occupation: 'Nurse',
      image: {
        src: bc2Img,
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Sister Brenda',
      occupation: 'Nurse',
      image: {
        src: bc3Img,
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Sister Kayla',
      occupation: 'Nurse',
      image: {
        src: bc4Img,
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial2 data on About page *******************
export const testimonials2About: TestimonialsProps = {
  id: 'testimonialsTwo-on-about',
  hasBackground: true,
  isTestimonialUp: true,
  header: {
    title: 'Our success stories',
    tagline: '',
  },
  testimonials: [
    {
      name: 'Tayla Kanengoni',
      job: 'Marketing Manager',
      testimonial: `From the moment I walked into the clinic, I was greeted with a warm and welcoming atmosphere. The clinic itself was very comfortable, which immediately put me at ease. `,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Moyo',
      job: 'Senior Marketer',
      testimonial: `I have been a patient on and off since 2002 and have always appreciated the efficient and professional approach of all concerned. I particularly like the friendly and genuine attitude of the staff - no synthetic smiles and high fives as in other clinics!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Mpofu',
      job: 'Co-Founder & CEO',
      testimonial: `Both times that I was in the London Clinic for surgery (as well as an outpatient), I found it to be well run and efficient. The staff were professional, friendly and knowledgeable.`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Sarah Gara',
      job: 'Business Owner',
      testimonial: `Excellent medical care from specialists, nurses and room service. The en-suite room was clean, comfortable, spacious and calm- ideal for recuperation. There was plenty of space to have family member to stay and support`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Keith Nyoni',
      job: 'Freelance Developer',
      testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Keith Young',
      },
      href: '/',
    },
    {
      name: 'Lisa Siyamusiya',
      job: 'Project Manager',
      testimonial: `Great experience, everyone was very kind and helpful. Thank you for the great provided care.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
  id: 'faqs-on-faqs',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    tagline: '',
  },
  items: [
    {
      title: 'Does 24/7 really mean 24/7',
      description: `Yes, it does. Thanks to our partnership with MyHealthcare Clinic and Doctorcall we can confidently offer you access to GP appointments 24/7, 365 days a year. That includes weekends, bank holidays, day and night. While not every type of appointment may be available all of the time, there will always be a GP that you can speak to about your concerns`,
    },
    {
      title: "I have issues speaking over the phone or cannot travel, what can I do?",
      description: `Thanks to our partnership with Doctorcall, we are able to offer at-home GP appointments within London. This service is also available 24/7, 7 days a week – so you never have to worry about getting your concerns addressed.`,
    },
    {
      title: "Can a GP prescribe me medications over the phone and how do I pick them up?",
      description: `All our GPs can prescribe medication and treatment options. We offer hassle-free e-prescriptions which are available immediately and can be collected at most local pharmacies.`,
    },
    {
      title: "What are the benefits of being referred to The London Clinic for diagnostics or treatment?",
      description: `The WMC boasts a world-class team of expert clinicians. With rapid diagnostics, specialist consultations and tailored treatment options, we’ll help you find out what’s wrong quickly, to get you feeling better sooner.`,
    },
  
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
  hasBackground: true,
  header: {
    title: 'Contact us',
    tagline: '',
  },
  content:
  'Get in touch with WMC. Our specially trained advisors are ready to help with your query today by phone or online.',
items: [
  {
    title: 'Our Address',
    description: ['1164 2nd Ave Parktown, Waterfalls', 'Harare, Zim'],
    icon: IconMapPin,
  },
  {
    title: 'Contact',
    description: ['Mobile: +263 772 579 606', 'Mail: jayden@gmail.com'],
    icon: IconPhoneCall,
  },
  {
    title: 'Working hours',
    description: ['Monday - Sunday: 08:00 - 19:00', 'Saturday & Sunday: 08:00 - 17:00'],
    icon: IconClock,
  },
],
  form: {
    inputs: [
      {
        type: 'text',
        label: 'Name',
        name: 'name',
        placeholder: 'Introduce your name',
        autocomplete: 'off',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Introduce your email address',
        autocomplete: 'on',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
    ],
    btn: {
      title: 'Contact us',
      type: 'submit',
    },
  },
};
