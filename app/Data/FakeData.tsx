import { BlogType, TLanguage, TProfile, TSuggestedTool, TTopicRow } from '../TypeAlias'

export const IntroBlogs: BlogType[] = [
  {
    id: 1,
    title: 'Building a better web, together',
    category: [''],
    createdAt: '',
    author: '',
    content: '',
    subContent:
      'We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.',
    image: 'https://web.dev/static/images/home.svg',
    action: 'about dev.web',
    link: '/about',
  },
  {
    id: 2,
    title: 'Guidance from Chrome Developer Relations',
    category: [''],
    createdAt: '',
    author: '',
    content: '',
    subContent:
      'We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.',
    image: 'https://web.dev/static/about/about_1440.png',
  },
]

export const SuggestedBlogs: BlogType[] = [
  {
    id: 1,
    title: 'Learn how modern web technology can help you succeed',
    category: [''],
    createdAt: '',
    author: '',
    content: '',
    subContent:
      'Learn about use cases that have been made much easier by innovative new web technologies.',
    image: 'https://web.dev/static/images/wcdw_1440.png',
    action: 'get started',
    link: '#',
  },
  {
    id: 2,
    title: 'Case Study',
    category: [''],
    createdAt: '',
    content: '',
    author: '',
    subContent: 'How Back/forward Cache Helped Yahoo! JAPAN News Increase Revenue by 9% on Mobile.',
    image: 'https://web.dev/static/images/yahoo-bfcache_1440.png',
    action: 'learn more',
    link: '#',
  },
]

export const NewBlogs: BlogType[] = [
  {
    id: 1,
    title: 'Introducing Baseline ',
    category: [''],
    createdAt: '',
    content: '',
    author: '',
    subContent:
      "At Google I/O 2023 we announced Baseline, learn more about this initiative and why we think it's important.",
    image: 'https://web.dev/static/images/baseline_960.png',
    action: 'learn more about Baseline',
    link: '#',
  },
  {
    id: 2,
    title: 'New to the web platform in October.',
    category: [''],
    createdAt: '',
    content: '',
    author: '',
    subContent:
      'Discover some of the interesting features that landed in stable and beta web browsers during September 2023.',
    image: 'https://web.dev/static/images/new-to-the-web-oct_960.png',
    action: "discover what's new",
    link: '#',
  },
  {
    id: 3,
    title: 'The CSS Podcast',
    category: [''],
    createdAt: '',
    content: '',
    author: '',
    subContent:
      'Follow Una Kravets and Adam Argyle, developer advocates from Google, who gleefully breakdown complex aspects from CSS into disgestible episodes of this podcast.',
    image: 'https://web.dev/static/images/css-podcast_960.png',
    action: 'listen now',
    link: '#',
  },
]

export const TopicRows: TTopicRow[] = [
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

export const Languages: TLanguage[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'zh', name: 'Chinese' },
  // Add more languages as needed
]

export const AdminList: TProfile[] = [
  {
    id: 1,
    name: 'Paul Kinlan',
    image: 'https://web.dev/static/image/authors/paulkinlan_720.jpeg',
    position: 'DevRel Lead',
    link: 'https://paul.kinlan.me/',
  },
  {
    id: 2,
    name: 'Philip Walton',
    image: 'https://web.dev/static/image/authors/philipwalton_720.jpg',
    position: 'DevRel Experiences Lead',
    link: '',
  },
  {
    id: 3,
    name: 'Ali Spivak',
    image: 'https://web.dev/static/image/authors/alispivak_720.png',
    position: 'DevRel Platforms Lead',
    link: '',
  },
  {
    id: 4,
    name: 'Rachel Andrew',
    image: 'https://web.dev/static/image/authors/rachelandrew_720.jpg',
    position: 'DevRel Content Lead',
    link: 'https://rachelandrew.co.uk/',
  },
]

export const SuggestedTool: TSuggestedTool = {
  id: 1,
  image: 'https://web.dev/static/image/dcc_new.svg',
  title: 'Making the web better for tomorrow',
  content:
    'We hope web.dev helps you to create high quality web experiences today. The Chrome team is also working to make the web better tomorrow. If you want to learn more about what we are doing, and offer feedback on the features we are developing and contributing to, check out Chrome for Developers.',
  btn: { content: 'Chrome for Developers', link: 'https://developer.chrome.com/' },
}

export const Blogs: BlogType[] = [
  {
    id: 1,
    title: 'New to the web platform in November',
    category: ['Blog'],
    createdAt: 'November 30, 2023',
    author: 'Rachel Andrew',
    content:
      'Discover some of the interesting features that have landed in stable and beta web browsers during November 2023.',
    subContent:
      'Discover some of the interesting features that have landed in stable and beta web browsers during November 2023.',
    image: 'https://web.dev/static/blog/web-platform-11-2023/hero.jpg',
  },
  {
    id: 2,
    title: 'Community highlight: Ramona Schwering',
    category: ['Blog'],
    createdAt: 'November 20, 2023',
    author: 'Jecelyn Yeen',
    content:
      'Ramona Schwering is a software engineer and Google Developer Expert with background in quality assurance.',
    subContent:
      'Ramona Schwering is a software engineer and Google Developer Expert with background in quality assurance.',
    image:
      'https://web.dev/static/blog/community-highlights/ramona-schwering/image/Ramona-Schwering_SW101116.jpeg',
  },
  {
    id: 3,
    title: 'Compression Streams are now supported on all browsers',
    category: ['Blog', 'JavaScript'],
    createdAt: 'November 2, 2023',
    author: 'Thomas Steiner',
    content:
      'The Compression Streams API is for compressing and decompressing streams of data using the gzip or deflate (or deflate-raw) formats. Using the built-in compression of the Compression Streams API,...',
    subContent:
      'The Compression Streams API is for compressing and decompressing streams of data using the gzip or deflate (or deflate-raw) formats. Using the built-in compression of the Compression Streams API,...',
    image: 'https://web.dev/static/images/social-wide.jpg',
  },
  {
    id: 4,
    title: 'Introducing Learn Performance',
    category: ['Blog'],
    createdAt: 'November 1, 2023',
    author: 'Jeremy Wagner',
    content:
      'Today we are launching Learn Performance—the next course in our series to help get you up to speed with modern web development.',
    subContent:
      'Today we are launching Learn Performance—the next course in our series to help get you up to speed with modern web development.',
    image: 'https://web.dev/static/blog/introducing-learn-performance/image/thumbnail.png',
  },
  {
    id: 5,
    title: 'New to the web platform in October',
    category: ['Blog'],
    createdAt: 'October 31, 2023',
    author: 'Rachel Andrew',
    content:
      'Discover some of the interesting features that have landed in stable and beta web browsers during October 2023.',
    subContent:
      'Discover some of the interesting features that have landed in stable and beta web browsers during October 2023.',
    image: 'https://web.dev/static/blog/web-platform-10-2023/hero.png',
  },
  {
    id: 6,
    title: 'Interop 2023 October update',
    category: ['Blog'],
    createdAt: 'October 30, 2023',
    author: 'Rachel Andrew',
    content:
      'Find out about the progress of the Interop 2023 project, and some of the features that have reached interoperability this year.',
    subContent:
      'Find out about the progress of the Interop 2023 project, and some of the features that have reached interoperability this year.',
    image: 'https://web.dev/static/blog/interop2023-update/hero.jpg',
  },
  {
    id: 7,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 8,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 9,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 10,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 11,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 12,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 13,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 14,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 15,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 16,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 17,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
  {
    id: 18,
    title: 'Join us online from 23-27 October for Passkeys Week',
    category: ['Blog', 'CSS', 'HTML'],
    createdAt: 'October 16, 2023',
    author: 'Milica Mihajlija',
    content:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    subContent:
      'Passkeys Week is bringing fresh content and highlighting learning materials to help you successfully implement passkeys!',
    image: 'https://web.dev/static/blog/join-us-for-passkeys-week/hero.png',
  },
]
