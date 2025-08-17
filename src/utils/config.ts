import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Odyssey",
  seo: {
    title: "Odyssey: Your Bitcoin Journey",
    description: "Your Bitcoin Journey",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.png",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: false,
  appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://instagram.com/google",
      facebook: "https://facebook.com/google",
      twitter: "https://x.com/tosinxogunjobi",
      github: "https://github.com/oogunjob/Odyssey-Resources"
    },
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How It Works" },
      // { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How It Works" },
      // { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download Odyssey Today!",
    subtitle:
      "Embark On Your Bitcoin Journey Now! Discover, Learn, Track Real-Time Prices, and Plan Your Investments with Our Beginner-Friendly Mobile App!",
    screenshots: [
      "/screenshots/1.webp",
      "/screenshots/2.webp",
      "/screenshots/3.webp",
    ],
  },
  home: {
    seo: {
      title: "Odyssey: Your Bitcoin Journey",
      description: "Your Bitcoin Journey Begins Here",
    },
    testimonials: {
      id: "testimonials",
      title: "Testimonials",
      subtitle: "Check out a few of our customer stories",
      cards: [
        {
          name: "Alice Johnson",
          comment:
            "The service was fantastic! Highly recommended. The team was very professional and attentive to our needs. They went above and beyond to ensure we were satisfied with the results. I will definitely be using their services again in the future.",
        },
        {
          name: "Bob Smith",
          comment:
            "Great value for the price. Very satisfied with the overall experience. The product quality is top-notch and the customer service is excellent. I appreciate the prompt responses to my inquiries and the helpful advice provided. Highly recommend.",
        },
        {
          name: "Charlie Brown",
          comment:
            "An excellent experience from start to finish. The onboarding process was smooth and the support team was very responsive. I felt valued as a customer and the results exceeded my expectations. I am impressed with the level of detail and care put into their work.",
        },
        {
          name: "Dana White",
          comment:
            "Superb customer service and high-quality products. The team demonstrated great expertise and patience throughout the project. They addressed all my concerns and provided valuable insights. The end product was delivered on time and surpassed my expectations.",
        },
        {
          name: "Eve Adams",
          comment:
            "I couldn't be happier with the results! The attention to detail and the level of customization provided was outstanding. The team was friendly and professional, making the entire process enjoyable. I highly recommend their services to anyone looking for top-quality work.",
        },
      ],
    },
    partners: {
      title: "As seen on",
      logos: [
        "/misc/companies/apple.svg",
        "/misc/companies/aws.svg",
        "/misc/companies/google.svg",
        "/misc/companies/tumblr.svg",
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "How It Works",
      subtitle:
        "Explore our comprehensive step-by-step guide to understand how our process ensures seamless and effective results",
      steps: [
        {
          title: "Install the App",
          subtitle:
            "Download and install the app on your device to get started quickly and easily.",
          image: "/stock/01.webp",
        },
        {
          title: "Create an Account",
          subtitle:
            "Sign up by entering your personal details and verifying your email to create a new account in just a few minutes.",
          image: "/stock/02.webp",
        },
        {
          title: "Set Up Your Profile",
          subtitle:
            "Complete your profile by adding necessary information and preferences to personalize your experience on the platform.",
          image: "/stock/03.webp",
        },
        {
          title: "Explore Features",
          subtitle:
            "Navigate through the app to discover various features and tools designed to enhance your productivity and engagement.",
          image: "/stock/04.webp",
        },
        {
          title: "Connect with Others",
          subtitle:
            "Start connecting with friends, colleagues, and like-minded individuals to expand your network and collaborate efficiently.",
          image: "/stock/05.webp",
        },
      ],
    },
    features: {
      id: "features",
      title: "Transform Your Daily Routine",
      subtitle:
        "Elevate your lifestyle with our innovative mobile app, designed for seamless living",
      cards: [
        {
          title: "Seamless Integration",
          subtitle:
            "Connect effortlessly with all your devices, ensuring smooth and efficient workflows across different platforms and applications without any disruptions",
          icon: "/3D/link-front-color.webp",
        },
        {
          title: "24/7 Customer Support",
          subtitle:
            "Get assistance whenever you need it with our dedicated customer support team, available around the clock to help resolve any issues you may encounter",
          icon: "/3D/clock-front-color.webp",
        },
        {
          title: "Intuitive Design",
          subtitle:
            "Navigate through our intuitive and easy-to-use interface designed to enhance user experience, making it accessible for users of all skill levels",
          icon: "/3D/roll-brush-front-color.webp",
        },
        {
          title: "Top-Notch Security",
          subtitle:
            "Protect your data with our top-notch security protocols, offering robust encryption and real-time monitoring to keep your information safe and secure",
          icon: "/3D/sheild-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "Can I buy Bitcoin on Odyssey?",
          answer:
            "No, the app does not support direct Bitcoin purchases. However, we provide a curated list of trusted resources and platforms within the app where you can safely buy Bitcoin, along with guides to help you get started.",
        },
        {
          question: " Is the app suitable for beginners with no Bitcoin experience?",
          answer:
            "Absolutely! The app is designed specifically for beginners, offering easy-to-understand tutorials, quizzes, and a Bitcoin history section to help you learn about Bitcoin at your own pace. Our goal is to bridge the knowledge gap for new users.",
        },
        {
          question: "How accurate is the Bitcoin price tracker in the app?",
          answer:
            "The price tracker provides real-time Bitcoin prices sourced from CoinGecko. Updates are frequent to ensure accuracy, though slight delays may occur due to network conditions. Always verify prices before making financial decisions.",
        },
        {
          question: "Are there any costs associated with using the app?",
          answer:
            "The app is free to download and use, with core features like the price tracker, tutorials, and quests available at no cost. We may introduce optional premium features in the future, but these will be clearly outlined to avoid any surprises.",
        },
        // {
        //   question: "How can I contact customer support?",
        //   answer:
        //     "You can contact our customer support team through the 'Contact Us' page on our website. We are available via email, phone, and live chat. Our support hours are Monday to Friday, 9 AM to 5 PM.",
        // },
      ],
    },
    header: {
      headline: "Set Sail on Your Bitcoin Journey",
      subtitle:
        "Chart yer course through Bitcoin basics with interactive quests, real-world tools, and a supportive crew. No jargon, no pressure—just the knowledge you need to confidently navigate the Bitcoin seas right from your pocket!",
      screenshots: [
        "/screenshots/1.webp",
        "/screenshots/2.webp",
        "/screenshots/3.webp",
      ],
      rewards: ["#1 Bitcoin Education App", "Featured Financial App"],
      usersDescription: "100+ people already using the app",
      headlineMark: [0, 2],
    },
    // pricing: {
    //   id: "pricing",
    //   title: "Pricing",
    //   subtitle: "Flexible costs to meet your budget",
    //   actionText: "Download the app",
    //   plans: [
    //     {
    //       title: "Basic Plan",
    //       price: "$9.99/month",
    //       rows: ["Access to basic features", "Email support", "1 GB storage"],
    //     },
    //     {
    //       title: "Standard Plan",
    //       price: "$19.99/month",
    //       featured: true,
    //       rows: [
    //         "Access to all basic features",
    //         "Priority email support",
    //         "10 GB storage",
    //         "Monthly webinars",
    //       ],
    //     },
    //     {
    //       title: "Premium Plan",
    //       price: "$29.99/month",
    //       rows: [
    //         "Access to all features",
    //         "24/7 support",
    //         "100 GB storage",
    //         "Weekly webinars",
    //         "Exclusive content",
    //       ],
    //     },
    //   ],
    // },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Odyssey: Your Bitcoin Journey",
      description: "Privacy Policy",
    },
    content: `# Privacy Policy

**Effective Date:** August 15, 2025

## Introduction

Welcome to Odyseey: Your Bitcoin Journey (the "App"). Odyssey ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our App.

## Information We Collect

### 1. Information You Provide
- **Account Information:** When you sign up for our App, we may collect your name, email address, and other contact information.
- **User Content:** We may collect any content you upload, post, or otherwise transmit through the App, including messages, photos, and other media.

### 2. Information We Collect Automatically
- **Usage Data:** We collect information about your interactions with the App, such as the features you use and the time spent on the App.
- **Device Information:** We collect information about the device you use to access the App, including IP address, device type, and operating system.

### 3. Information from Third Parties
- **Third-Party Services:** If you connect to the App through a third-party service (e.g., social media), we may collect information from that service as permitted by their privacy policies.

## How We Use Your Information

We may use the information we collect for the following purposes:
- **To Provide and Maintain Our Service:** We use your information to operate and improve the App.
- **To Communicate with You:** We may use your contact information to send you updates, notifications, and other communications related to the App.
- **To Personalize Your Experience:** We may use your information to personalize your experience with the App and to offer you content tailored to your interests.
- **For Analytics and Research:** We use the information to analyze how our users interact with the App and to improve our services.

## Sharing Your Information

We do not share your personal information with third parties except in the following circumstances:
- **With Your Consent:** We may share your information with third parties if you give us explicit consent to do so.
- **Service Providers:** We may share your information with third-party service providers who perform services on our behalf.
- **Legal Requirements:** We may disclose your information if required by law, or if we believe that such action is necessary to comply with legal obligations, protect our rights, or prevent fraud.

## Your Rights and Choices

- **Access and Correction:** You have the right to access and correct the personal information we hold about you.
- **Data Deletion:** You may request that we delete your personal information by contacting us at ogunjobi.developer@gmail.com.
- **Opt-Out:** You may opt out of receiving promotional communications from us by following the instructions in those communications.

## Security

We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is completely secure, and we cannot guarantee the absolute security of your information.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Privacy Policy.

## Contact Us  
If you have any questions about these Terms and Conditions, You can contact us:  

- By email: **ogunjobi.developer@gmail.com**  
- By visiting this page on our website: **https://www.odysseybtc.app**
`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Odyssey: Your Bitcoin Journey",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** August 15, 2025

## Introduction

This Cookies Policy explains how Odyssey ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, Odyssey: Your Bitcoin Journey (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us  
If you have any questions about these Terms and Conditions, You can contact us:  

- By email: **ogunjobi.developer@gmail.com**  
- By visiting this page on our website: **https://www.odysseybtc.app**
`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - Odyssey: Your Bitcoin Journey",
      description: "Terms and conditions",
    },
    content: `# Terms and Conditions

**Effective Date:** August 15, 2025

Please read these terms and conditions carefully before using Our Service.  

---

## Interpretation and Definitions  

### Interpretation  
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.  

### Definitions  
For the purposes of these Terms and Conditions:  

- **Application** means the software program provided by the Company downloaded by You on any electronic device, named *Odyssey: Your Bitcoin Journey*.  
- **Application Store** means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.  
- **Affiliate** means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.  
- **Country** refers to: Washington, United States.  
- **Company** (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to *Odyssey: Your Bitcoin Journey*.  
- **Device** means any device that can access the Service such as a computer, a cellphone or a digital tablet.  
- **Service** refers to the Application.  
- **Terms and Conditions** (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.  
- **Third-party Social Media Service** means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.  
- **You** means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.  

---

## Acknowledgment  
These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.  

Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.  

By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.  

You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.  

Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.  

---

## User Accounts  
When You create an account with Us, You must provide accurate, complete, and up-to-date information. You are responsible for maintaining the confidentiality of Your account and password.  

You agree not to use:  
- Inappropriate, offensive, or misleading usernames.  
- The Service for cheating, fraudulent activity, spamming, harassment, hacking, or any other abusive or unlawful conduct.  
- The Service in a way that disrupts or negatively impacts other users’ experiences.  

The Company reserves the right to suspend or terminate Your account at any time if You engage in prohibited conduct.  

---

## In-App Purchases  
The Application may offer in-app purchases, including but not limited to premium features, digital items, or subscriptions.  

- All purchases are final and non-refundable unless required by applicable law.  
- You must be at least 18 years old or have parental/guardian consent to make purchases.  
- By completing a purchase, You authorize the Application Store to charge Your chosen payment method.  

---

## Feedback and Suggestions  
You acknowledge and agree that if You provide feedback, suggestions, or ideas regarding the Application ("Feedback"), the Company may use, modify, and implement such Feedback without any obligation to compensate You or provide acknowledgment.  

---

## Promotions, Contests, and Sweepstakes  
From time to time, the Company may offer promotions, contests, or sweepstakes ("Promotions"). Participation in such Promotions may be subject to additional rules and eligibility requirements, which will be made available at the time of the Promotion.  

- The Company reserves the right to cancel, suspend, or modify any Promotion at any time.  
- Promotions are void where prohibited by law.  
- Any prizes or rewards associated with Promotions are non-transferable and subject to availability.  

---

## Links to Other Websites  
Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.  

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.  

We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.  

---

## Termination  
We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.  

Upon termination, Your right to use the Service will cease immediately.  

---

## Limitation of Liability  
Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.  

To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.  

Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.  

---

## "AS IS" and "AS AVAILABLE" Disclaimer  
The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.  

Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied:  
(i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon;  
(ii) that the Service will be uninterrupted or error-free;  
(iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or  
(iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.  

Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.  

---

## Governing Law  
The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.  

---

## Disputes Resolution  
If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.  

---

## For European Union (EU) Users  
If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.  

---

## United States Legal Compliance  
You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.  

---

## Severability and Waiver  

### Severability  
If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.  

### Waiver  
Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.  

---

## Translation Interpretation  
These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.  

---

## Changes to These Terms and Conditions  
We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.  

By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.  

---

## Contact Us  
If you have any questions about these Terms and Conditions, You can contact us:  

- By email: **ogunjobi.developer@gmail.com**  
- By visiting this page on our website: **https://www.odysseybtc.app**
`,
  },
};

export default templateConfig;
