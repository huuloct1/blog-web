import TopicRow, { TTopicRow } from './TopicRow'

const TopicRows = () => {
  return (
    <div>
      {topicRows?.map((item) => {
        return item.id % 2 === 1 ? (
          <TopicRow key={item.id} topicRow={item} />
        ) : (
          <TopicRow key={item.id} topicRow={item} className='bg-white' />
        )
      })}
    </div>
  )
}
export default TopicRows

const topicRows: TTopicRow[] = [
  {
    id: 1,
    title: 'CSS and UI design',
    subTitle: 'Explore CSS',
    description:
      "On web.dev you'll find tips and techniques to use in your work right now. Discover the latest content here.",
    itemList: [
      {
        id: 1,
        title: 'Adapting typography to user preference using CSS',
        description:
          "A method to adapt a font to your users' preferences, so they're maximally comfortable reading your content.",
      },
      {
        id: 2,
        title: 'New CSS color spaces and functions in all major engines',
        description:
          'All major engines now support the new CSS color spaces and functions. Find out how they can bring vibrancy to your designs.',
      },
      {
        id: 3,
        title: 'What are source maps?',
        description: 'Improve web debugging experience with source maps.',
      },
      {
        id: 4,
        title: 'CSS subgrid',
        description:
          'Subgrid is now interoperable across all three major engines. Find out how to use it in this article.',
      },
    ],
  },
  {
    id: 2,
    title: 'Performance',
    subTitle: 'Core Web Vitals',
    description:
      'Content on Core Web Vitals and other metrics. Helping you to build faster websites and apps.',
    btnLink: 'explore core web vitals',
    itemList: [
      {
        id: 1,
        title: 'Advancing Interaction to Next Paint',
        description:
          'The Chrome team announces that INP is no longer experimental and will replace FID as a Core Web Vital in 2024.',
      },
      {
        id: 2,
        title: 'How to optimize INP',
        description: 'Learn how to optimize for the Interaction to Next Paint metric.',
      },
      {
        id: 3,
        title: 'Our top Core Web Vitals recommendations for 2023',
        description:
          "A collection of best practices for optimizing websites' Core Web Vitals performance based on the state of the web in 2023.",
      },
      {
        id: 4,
        title: 'Use the Web Vitals extension to debug Core Web Vitals issues.',
        description:
          'The Web Vitals extension now shows you more debugging information to help you identify the root causes of Core Web Vitals issues.',
      },
    ],
  },
  {
    id: 3,
    title: 'Web Apps',
    subTitle: 'PWA',
    description: 'Create capable web experiences.',
    btnLink: 'more on PWA',
    itemList: [
      {
        id: 1,
        title: 'Learn PWA',
        description:
          'A course that breaks down every aspect of modern progressive web app development.',
      },
      {
        id: 2,
        title: 'TransformStream is now supported cross browser.',
        description:
          'Now that transform streams are supported in Safari, Firefox, and Chrome they are finally ready for prime time.',
      },
      {
        id: 3,
        title: 'New patterns for amazing apps',
        description:
          'Dive into a fantastic collection of new patterns for amazing apps, including clipboard patterns, file patterns, and advanced app patterns.',
      },
      {
        id: 4,
        title: 'Project Fugu API showcase',
        description: 'On the Chrome Developers site, explore capabilities APIs.',
      },
    ],
  },
  {
    id: 4,
    title: 'Accessibility',
    subTitle: 'Available to all',
    description: 'Learn how to make your sites accessible to all users.',
    btnLink: 'more on Accessibility',
    itemList: [
      {
        id: 1,
        title: 'Learn Accessibility',
        description:
          'Our new course is a great entry point and reference for accessibility topics.',
      },
      {
        id: 2,
        title: 'Testing web design color contrast',
        description:
          'An overview of three tools and techniques for testing and verifying accessible color contrast of your design.',
      },
      {
        id: 3,
        title: 'Building the main navigation for a website',
        description:
          'This tutorial describes how to build an accessible main navigation of a website. You learn about semantic HTML, accessibility, and how using ARIA attributes can sometimes do more harm than good.',
      },
      {
        id: 4,
        title: 'Community highlight—Elisa Bandy',
        description:
          'Elisa Bandy is a Googler working on web accessibility and documentation for our internal tools.',
      },
    ],
  },
  {
    id: 5,
    title: 'Payments and identity',
    subTitle: 'Logging in users and taking payment',
    description:
      'Find our the latest techniques and best practices for payments and allowing users to log into your app safely.',
    btnLink: 'more on identity',
    itemList: [
      {
        id: 1,
        title: 'Create a passkey for passwordless logins',
        description: 'Passkeys make user accounts safer, simpler, easier to use.',
      },
      {
        id: 2,
        title: 'Sign in with a passkey',
        description:
          'Create a sign in experience that uses passkeys while still accommodating existing password users.',
      },
      {
        id: 3,
        title: 'Web payments overview',
        description: 'Learn more about Web Payments and how they work.',
      },
      {
        id: 4,
        title: 'Payment and address form best practices',
        description:
          'Maximize conversions by helping your users complete address and payment forms as quickly and easily as possible.',
      },
    ],
  },
]
