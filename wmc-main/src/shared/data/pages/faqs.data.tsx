import { CallToActionProps, FAQsProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Frequently Asked Questions',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Whether you need help using our services, solving problems, or just want some useful tips, our FAQs are here to assist you.`}
      </span>{' '}
      Explore them to optimize your experience with our services.
    </>
  ),
  tagline: '',
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: 'Find what you need',
    subtitle: 'Get quick answers to your questions: Everything you need in one spot.',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'Does 24/7 really mean 24/7',
          description: `Yes, it does. Thanks to our partnership with MyHealthcare Clinic and Doctorcall we can confidently offer you access to GP appointments 24/7, 365 days a year. That includes weekends, bank holidays, day and night. While not every type of appointment may be available all of the time, there will always be a GP that you can speak to about your concerns`,
        },
        {
          title: "I have issues speaking over the phone or cannot travel, what can I do?",
          description: `Thanks to our partnership with Doctorcall, we are able to offer at-home GP appointments within w. This service is also available 24/7, 7 days a week – so you never have to worry about getting your concerns addressed.`,
        },
        {
          title: "Can a GP prescribe me medications over the phone and how do I pick them up?",
          description: `All our GPs can prescribe medication and treatment options. We offer hassle-free e-prescriptions which are available immediately and can be collected at most local pharmacies.`,
        },
        {
          title: "What are the benefits of being referred to WMC for diagnostics or treatment?",
          description: `The WMC boasts a world-class team of expert clinicians. With rapid diagnostics, specialist consultations and tailored treatment options, we’ll help you find out what’s wrong quickly, to get you feeling better sooner.`,
        },
      ],
    },
    {
      link: {
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'Which plan is best for me?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'What are my payment options?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: 'How do I change my plan to a different one?',
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: 'What happen at the end of my free trial?',
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'Can I import data from other tools?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'Can I cancel my plan at any time?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'How  do I book?',
          description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
        },
        {
          title: 'How do I customize my booking',
          description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
        },
        {
          title: 'Does the clinic offer food?',
          description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
        },
        {
          title: 'Are there any additional fees or charges for using online chat?',
          description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
        },
      ],
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  id: 'callToAction-on-faqs',
  hasBackground: true,
  title: 'Still have questions?',
  subtitle:
    'The WMC boasts a world-class team of expert clinicians. With rapid diagnostics, specialist consultations and tailored treatment options, we’ll help you find out what’s wrong quickly, to get you feeling better sooner.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
