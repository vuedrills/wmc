import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import nextJsLogo from '~/assets/images/ll.jpg';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.avif';
import cameraBackImg from '~/assets/images/baby.jpg';
import gasImg from '~/assets/images/gas.avif';
import bcImg from '~/assets/images/bc.jpg';
import bc2Img from '~/assets/images/bc2.jpg';
import bc3Img from '~/assets/images/bc3.jpg';
import bc4Img from '~/assets/images/bc4.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>

    Start your whole health journey <span className="hidden md:inline">here</span> <span>at Waterfall Medical Center</span> &{' '}
      <span className="sm:whitespace-nowrap">More</span>
    </>
  ),
  subtitle: (
    <>
   
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          We
        </span>{' '}
        pride ourselves on the unique patient experience and quality of care we provide., which sets our hospital apart. <em>at WMC</em>  <em></em>.
      </span>{' '}
      We also invest in state-of-the-art facilities and medical technologies so we can offer ground-breaking treatments in specialist treatment units.
    </>
  ),
  callToAction: {
    text: 'Book an Appointment',
    href: 'https://cal.com/drmaisiri',
    icon: IconDownload,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Telemedicine',
    href: 'https://cal.com/drmaisiri/online',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: '',
      src: nextJsLogo,
      alt: '',
    },
    {
      link: '',
      src: reactLogo,
      alt: '',
    },
    {
      link: '',
      src: tailwindCssLogo,
      alt: '',
    },
    {
      link: '',
      src: typescriptLogo,
      alt: '',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">WMC</span>
      </>
    ),
    subtitle:
      "At WMC, it’s all about you. We want to help you get back to your best health as smoothly as possible.Our nurses, clinicians and support teams are dedicated to the care of a very small number of patients, so they have more time for you.",
    tagline: '',
  },
  items: [
    {
      title: 'Your 24/7 private GP',
      description:
        "Your health concerns don't keep to working hours, so neither do we. Access a private GP, anytime, anywhere. You'll usually be seen within 2 hours, so you can feel better, faster.",
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Book now',
        href: 'https://cal.com/drmaisiri',
      },
    },
    {
      title: 'Family Planning Services',
      description:
        "Contraceptive services, pregnancy testing and counseling, helping clients achieve pregnancy, basic infertility services, preconception health services, and STD services.",
      icon: IconComponents,
      callToAction: {
        text: 'Discover now',
        href: 'https://cal.com/drmaisiri',
      },
    },
    {
      title: 'Baby Immmunisation',
      description:
        'Protect your little ones from harmful diseases with our baby vaccination services! Our clinic is open from 8am-5pm every Wednesday , so come on in and give your baby the best start in life.',
      icon: IconListCheck,
      callToAction: {
        text: 'Learn more',
        href: 'https://cal.com/drmaisiri',
      },
    },
    {
      title: 'Medical Examination',
      description:
        'A physical exam checks your overall health. We will evaluate the basic function of your organs, address any concerns, update your vaccinations and help you get healthy or maintain good health. Get a physical exam each year. It takes about 30 minutes to complete.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: 'https://cal.com/drmaisiri',
      },
    },
    {
      title: 'Laboratory',
      description:
        "MedPath Diagnostics provides preventive health services, blood tests & personalised wellness packages to improve health & longevity at affordable costs.We are equipped with Modern Technology & Qualified Technicians to give accurate, efficient services to you and your family. ",
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Learn more',
        href: 'https://cal.com/drmaisiri',
      },
    },
    {
      title: 'Vaccine And Travel Clinic',
      description:
        'We offer a range of vaccinations which include yellow fever, tetanus, Hepatitis B, rabies, typhoid, meningitis, influenza and many others.',
      icon: IconBulb,
      callToAction: {
        text: 'Discover now',
        href: 'https://cal.com/drmaisiri',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Be seen your way',
    subtitle: ' Access a private GP, anytime, anywhere.',
    tagline: '',
  },
  content:
    'You can book in quickly with an experienced private GP by phone, via videocall, in person at our Harley Street clinic or in the comfort of your own home. The choice is yours.',
  items: [
    {
      title: 'Walk-in clinic',
      description:
        'Visit us at our 1164 Second Avenue Waterfalls clinic 8am-7pm, Monday to Sartuday, to speak to a doctor in person.',
    },
    {
      title: 'Telephone consultations',
      description:
        'Speak to a GP over the phone or via video call within an hour of booking, anytime 24/7, for ultimate flexibility.',
    },
    {
      title: 'At-home visits',
      description:
        'Prefer to see a doctor in your own home? Appointments available 24/7 within Waterfall & Harare CBD',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'You’ll receive one-to-one in-person care under the guidance of our experienced GP, with outstanding nursing to support you throughout the testing process',
  items: [
    {
      title: 'Baby Immunization',
    },
    {
      title: 'Your health. Your way.',
    },
    {
      title: 'Flexible. Trusted. Experienced.',
    },
    {
      title: 'We personalise care',
    },
    {
      title: 'Excellence in one place',
    },
    {
      title: '24/7 access',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Three simple steps to getting your treatment .',
  },
  items: [
    {
      title: 'Step 1: Book an appointment',
      description:
        'Contact our dedicated self-pay team to book an appointment. They’ll help you choose the right specialist consultant for your needs and book an initial consultation at a time to suit you. We can often arrange appointments within 24 to 48 hours. ',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2: Meet Your Care Provider',
      description:
        'Your consultant will take their time to discuss your medical history and help you understand your treatment options. They’ll also explain if you need any diagnostic tests or scans, to help them recommend the best treatment for you. ',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3: Arrange your treatment',
      description:
        'Your consultant will help you plan a convenient time for your treatment. We’ll also provide you with all the information you need before you arrive and support you every step of the way while you’re with us. ',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      "Your trust is our top concern, so read our client's reviews.",
  },
  testimonials: [
    {
      name: 'Tayla Kanengoni',
      job: '',
      testimonial: `From the moment I walked into the clinic, I was greeted with a warm and welcoming atmosphere. The clinic itself was very comfortable, which immediately put me at ease. `,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Moyo',
      job: '',
      testimonial: `I have been a patient on and off since 2002 and have always appreciated the efficient and professional approach of all concerned. I particularly like the friendly and genuine attitude of the staff - no synthetic smiles and high fives as in other clinics!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Mpofu',
      job: '',
      testimonial: `Both times that I was in the London Clinic for surgery (as well as an outpatient), I found it to be well run and efficient. The staff were professional, friendly and knowledgeable.`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Sarah Gara',
      job: '',
      testimonial: `Excellent medical care from specialists, nurses and room service. The en-suite room was clean, comfortable, spacious and calm- ideal for recuperation. There was plenty of space to have family member to stay and support`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Keith Nyoni',
      job: '',
      testimonial: `Good doctor. He is very simple and gentle in his behavior. He will give sufficient time to each patient. He studies the patient and disease meticulously. We can freely interact with the doctor.`,
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

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Want to know more? ',
    tagline: '',
  },
  items: [
    {
      title: 'Does 24/7 really mean 24/7',
      description: `Yes, it does. Thanks to our partnership with MyHealthcare Clinic and Doctorcall we can confidently offer you access to GP appointments 24/7, 365 days a year. That includes weekends, bank holidays, day and night. While not every type of appointment may be available all of the time, there will always be a GP that you can speak to about your concerns`,
    },
    {
      title: "I have issues speaking over the phone or cannot travel, what can I do?",
      description: `Thanks to our partnership with Doctorcall, we are able to offer at-home GP appointments within Waterfalls. This service is also available 24/7, 7 days a week – so you never have to worry about getting your concerns addressed.`,
    },
    {
      title: "Can a GP prescribe me medications over the phone and how do I pick them up?",
      description: `All our GPs can prescribe medication and treatment options. We offer hassle-free e-prescriptions which are available immediately and can be collected at most local pharmacies.`,
    },
    {
      title: "What are the benefits of being referred to The Waterfalls Medical Centre for diagnostics or treatment?",
      description: `The WMC boasts a world-class team of expert clinicians. With rapid diagnostics, specialist consultations and tailored treatment options, we’ll help you find out what’s wrong quickly, to get you feeling better sooner.`,
    },
  
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Please note these are starting prices and actual may vary. You can visit or contact us for specified prices.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'Laboratory',
      price: 19,
      period: '45 mins',
      items: [
        {
          description: 'Urine and Blood Tests',
        },
        {
          description: 'Toxicology',
        },
        {
          description: 'Histopathology',
        },
        {
          description: 'Immunology',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Book',
        href: 'https://cal.com/drmaisiri',
      },
      hasRibbon: false,
     
    },
    {
      title: 'Appointment',
      price: 10,
      period: '45 mins',
      items: [
        {
          description: 'Individualised attention',
        },
        {
          description: 'Physical Examination',
        },
        {
          description: 'Pescription Management',
        },
        {
          description: 'Follow up care',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Book',
        href: 'https://cal.com/drmaisiri',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
 
    {
      title: 'Radiology',
      subtitle: '',
      price: 29,
      period: '45 mins',
      items: [
        {
          description: 'X-ray',
        },
        {
          description: 'Ultrasound.',
        },
        {
          description: 'CT Scan',
        },
        {
          description: 'MRI',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Book',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'The team manages the day-to-day operations and the strategy of the hospital.',
    // tagline: 'Team',
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

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'Dont hesitate to call us',
    //tagline: 'Contact',
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
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Articles and newsletter',
  subtitle:
    'Join thousands of our clients who get in-depth articles (on Fridays) and hand-picked health tips (every month):',
  callToAction: {
    text: 'Doctors blog',
    href: 'h',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Doctors blog',
      description: "Read Dr Maisiri's blog posts ",
      href: '/',
    },
    {
      title: 'Sisters blog',
      description: 'Health advice from your care givers.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Subscribe to our newsletter and receive health updates right into your inbox',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
