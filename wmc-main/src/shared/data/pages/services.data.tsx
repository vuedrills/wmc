import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/hero.jpg';
import cameraFrontImg from '~/assets/images/camera-front.avif';
import cameraBackImg from '~/assets/images/camera-back.avif';


// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Services and Treatments',
  subtitle:
    'Our mission is to provide comprehensive, personalized healthcare that meets the highest standards of quality & convenience all for a healthier tomorrow. ',
  callToAction: {
    text: 'Book an Appointment',
    href: "https://www.facebook.com/profile.php?id=61553480327095&sk=photos_by",
    targetBlank: true,
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Our Services',
  },
  items: [
    {
      title: 'Your 24/7 private GP',
      description:
        "Your health concerns don't keep to working hours, so neither do we. Access a private GP, anytime, anywhere. You'll usually be seen within 2 hours, so you can feel better, faster.",
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Book now',
        href: '/',
      },
    },
    {
      title: 'Family Planning Services',
      description:
        "Contraceptive services, pregnancy testing and counseling, helping clients achieve pregnancy, basic infertility services, preconception health services, and STD services.",
      icon: IconComponents,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Baby Immmunisation',
      description:
        'Protect your little ones from harmful diseases with our baby vaccination services! Our clinic is open from 8am-5pm every Wednesday , so come on in and give your baby the best start in life.',
      icon: IconListCheck,
      callToAction: {
        text: 'Learn more',
        href: '/',
      },
    },
    {
      title: 'Medical Examination',
      description:
        'A physical exam checks your overall health. We will evaluate the basic function of your organs, address any concerns, update your vaccinations and help you get healthy or maintain good health. Get a physical exam each year. It takes about 30 minutes to complete.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Laboratory',
      description:
        "MedPath Diagnostics provides preventive health services, blood tests & personalised wellness packages to improve health & longevity at affordable costs.We are equipped with Modern Technology & Qualified Technicians to give accurate, efficient services to you and your family. ",
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Learn more',
        href: '/',
      },
    },
    {
      title: 'Vaccine And Travel Clinic',
      description:
        'We offer a range of vaccinations which include yellow fever, tetanus, Hepatitis B, rabies, typhoid, meningitis, influenza and many others.',
      icon: IconBulb,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
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
      'Prefer to see a doctor in your own home? Appointments available 24/7 within Waterfalls',
  },
],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
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
  isReversed: false,
  isAfterContent: true,
};

// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Clinic pharmacy',
    subtitle:
      'Our pharmacy team is made up of qualified pharmacists and technicians that provide safe and effective medication for all patients at WMC. .',
  },
  isImageDisplayed: true,
  image: {
    src:  "/images/f4.jpg",
    alt: 'Hero TailNext',
  },
  items: [
    {
      title: 'About MetLife pharmacy',
      description: 'After your treatment or surgery, a consultant may write a prescription that will be conveniently dispensed by our onsite pharmacy.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use',
      description: 'This means that you can leave with everything you need to start your recovery at home',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'A pharmacist will inform you on how to take your medicine correctly. They will talk through any possible side effects and give advice on managing them.',
      icon: IconListCheck,
    },
    {
      title: 'Our pharmacy team help with',
      description: 'Reviewing your prescription, giving you expert information',
      icon: IconRocket,
    },
    {
      title: 'Exceptional',
      description:
        'The pharmacy team is exceptionally knowledgeable and can give you advice and guidance on all types of medication. ',
      icon: IconArrowsRightLeft,
    },
  ],
};

export const features5Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Medlab',
    subtitle:
      'Our lab team is made up of qualified lab technicians that provide affordable and effective diagnostic services for all patients at WMC. .',
  },
  isImageDisplayed: true,
  image: {
    src:  "/images/gg.png",
    alt: 'Hero TailNext',
  },
  items: [
    {
      title: 'Want to lift your performance?',
      description: 'If you’re training for an event or keen to monitor your ﬁtness progress, a blood test is a fantastic place to start.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Want to monitor a health condition?',
      description: 'If you’re concerned or living with a disorder or illness, a blood test can be an effective way to detect or monitor an ongoing health issue.',
      icon: IconComponents,
    },
    {
      title: 'Concerned about your health?',
      description: 'If you’re concerned about fatigue, tiredness, or any other symptoms, a blood test is the most effective way of detecting underlying health issues.',
      icon: IconListCheck,
    },
    {
      title: 'Which blood test is right for you? ',
      description: ' It isn’t always easy to detect underlying health issues. Whether you have noticed changes in how you feel or are just curious about what’s happening inside your body, we have the test for you. ',
      icon: IconRocket,
    },
    {
      title: 'General health ',
      description:
        'Regular blood testing is one of the most effective ways to prevent illness and maintain great general health ',
      icon: IconArrowsRightLeft,
    },
  ],
};



// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      "Your trust is our top concern, so read our client's reviews.",
  },
  testimonials: [
 
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

  ],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Want to know more? ',
    tagline: '',
  },
  columns: 1,
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

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Still have questions?',
  subtitle:
  'Get in touch with WMC. Our specially trained advisors are ready to help with your query today by phone or online.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
