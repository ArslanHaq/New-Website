import type { PageHero } from "./types";

export type LegalBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "bullets";
      items: string[];
    }
  | {
      type: "subheading";
      text: string;
    };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  hero: PageHero;
  lastUpdated: string;
  summary: string;
  sections: LegalSection[];
};

export const termsOfUse: LegalDocument = {
  hero: {
    eyebrow: "Legal",
    title: "Terms of",
    accent: "Use",
    description:
      "These terms govern access to and use of the Pherrix website, services, and related content.",
  },
  lastUpdated: "February 2026",
  summary:
    "These Terms of Service govern your access to and use of the website, services, and related content provided by Pherrix Inc. By accessing or using our website located at www.pherrix.com, you agree to these Terms.",
  sections: [
    {
      title: "Acceptance of Terms",
      blocks: [
        {
          type: "paragraph",
          text: "By accessing the Site, you confirm that you are at least 18 years old and legally capable of entering into binding agreements. If using the Site on behalf of an organization, you represent that you are authorized to bind that organization.",
        },
      ],
    },
    {
      title: "Changes to Terms",
      blocks: [
        {
          type: "paragraph",
          text: "We may update these Terms periodically. Continued use of the Site after updates constitutes acceptance of revised Terms.",
        },
      ],
    },
    {
      title: "Privacy and Data Protection (GDPR & CCPA Compliance)",
      blocks: [
        {
          type: "paragraph",
          text: "Your use of the Site is also governed by our Privacy Policy.",
        },
        {
          type: "paragraph",
          text: "For individuals located in the European Economic Area (EEA), United Kingdom, or California:",
        },
        {
          type: "bullets",
          items: [
            "Lawful Basis for Processing (GDPR): We process personal data based on consent, contractual necessity, legal obligations, or legitimate interests.",
            "Data Subject Rights (GDPR): You may request access, correction, deletion, restriction, objection, portability, or withdrawal of consent by contacting vivek@pherrixtx.com.",
            "International Transfers: Where data is transferred outside the EEA/UK, appropriate safeguards, such as Standard Contractual Clauses, are implemented.",
          ],
        },
        {
          type: "subheading",
          text: "California Privacy Rights (CCPA/CPRA)",
        },
        {
          type: "paragraph",
          text: "California residents have the right to:",
        },
        {
          type: "bullets",
          items: [
            "Know what categories of personal information we collect and how we use it.",
            "Request deletion of personal information, subject to legal exceptions.",
            "Request correction of inaccurate personal information.",
            "Opt out of the sale or sharing of personal information.",
            "Limit the use and disclosure of sensitive personal information, if applicable.",
            "Not be discriminated against for exercising privacy rights.",
          ],
        },
        {
          type: "subheading",
          text: "Do Not Sell or Share My Personal Information",
        },
        {
          type: "paragraph",
          text: "Pherrix does not sell personal information for monetary compensation. However, California residents have the right to opt out of the sale or sharing of personal information as defined under the California Consumer Privacy Act, as amended by the CPRA.",
        },
        {
          type: "paragraph",
          text: "If we engage in activities that qualify as sharing for cross-context behavioral advertising or similar purposes, California residents may opt out at any time by clicking the Do Not Sell or Share My Personal Information link available on our cookie banner or by emailing vivek@pherrixtx.com with the subject line California Privacy Request.",
        },
        {
          type: "paragraph",
          text: "We will verify your identity before processing any request and respond within the time required by law.",
        },
      ],
    },
    {
      title: "Use of the Site",
      blocks: [
        {
          type: "paragraph",
          text: "You agree to use the Site lawfully and not:",
        },
        {
          type: "bullets",
          items: [
            "Engage in unlawful, harmful, or fraudulent conduct.",
            "Attempt unauthorized access to systems.",
            "Distribute malware or automated scraping tools.",
            "Interfere with the Site's security or functionality.",
          ],
        },
      ],
    },
    {
      title: "Intellectual Property",
      blocks: [
        {
          type: "paragraph",
          text: "All content on the Site, including text, graphics, logos, data, software, and design, is owned by Pherrix or its licensors and protected by intellectual property laws. No rights are granted except for limited, personal, non-commercial use.",
        },
      ],
    },
    {
      title: "No Medical or Investment Advice",
      blocks: [
        {
          type: "paragraph",
          text: "Information provided on the Site is for informational purposes only and does not constitute medical, clinical, regulatory, or investment advice.",
        },
      ],
    },
    {
      title: "Third-Party Links",
      blocks: [
        {
          type: "paragraph",
          text: "The Site may include links to third-party websites. Pherrix is not responsible for external content or privacy practices.",
        },
      ],
    },
    {
      title: "Disclaimer of Warranties",
      blocks: [
        {
          type: "paragraph",
          text: "THE SITE IS PROVIDED AS IS AND AS AVAILABLE WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.",
        },
      ],
    },
    {
      title: "Limitation of Liability",
      blocks: [
        {
          type: "paragraph",
          text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, PHERRIX SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. TOTAL LIABILITY SHALL NOT EXCEED $100 USD.",
        },
      ],
    },
    {
      title: "Indemnification",
      blocks: [
        {
          type: "paragraph",
          text: "You agree to indemnify and hold harmless Pherrix and its affiliates from claims arising from your use of the Site or violation of these Terms.",
        },
      ],
    },
    {
      title: "Governing Law",
      blocks: [
        {
          type: "paragraph",
          text: "These Terms are governed by the laws of the State of Delaware without regard to conflict-of-law principles.",
        },
      ],
    },
    {
      title: "Contact Information",
      blocks: [
        {
          type: "paragraph",
          text: "Pherrix Inc. Email: vivek@pherrixtx.com.",
        },
      ],
    },
  ],
};

export const privacyPolicy: LegalDocument = {
  hero: {
    eyebrow: "Legal",
    title: "Privacy",
    accent: "Policy",
    description:
      "This policy explains how Pherrix collects, uses, discloses, and protects personal information.",
  },
  lastUpdated: "February 2026",
  summary:
    "Pherrix Inc. is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit www.pherrixtx.com.",
  sections: [
    {
      title: "Categories of Personal Information We Collect (CPRA Notice at Collection)",
      blocks: [
        {
          type: "paragraph",
          text: "We may collect the following categories of personal information:",
        },
        {
          type: "bullets",
          items: [
            "Identifiers: name, email address, IP address, device identifiers.",
            "Internet or Electronic Activity Information: browsing history, interaction data, cookies, analytics data.",
            "Professional or Employment Information: job title, company, if submitted.",
            "Sensitive Personal Information, if provided: limited to information voluntarily submitted through forms.",
          ],
        },
        {
          type: "paragraph",
          text: "We do not knowingly collect personal information from children under 18.",
        },
      ],
    },
    {
      title: "Sources of Personal Information",
      blocks: [
        {
          type: "paragraph",
          text: "We collect personal information:",
        },
        {
          type: "bullets",
          items: [
            "Directly from you, including contact forms and newsletter sign-ups.",
            "Automatically through cookies and tracking technologies.",
            "From service providers assisting in website operation.",
          ],
        },
      ],
    },
    {
      title: "Purpose for Collection and Use",
      blocks: [
        {
          type: "paragraph",
          text: "We use personal information to:",
        },
        {
          type: "bullets",
          items: [
            "Operate and maintain the Site.",
            "Respond to inquiries.",
            "Provide corporate and scientific information.",
            "Improve website performance and user experience.",
            "Comply with legal obligations.",
            "Protect against fraud or security risks.",
          ],
        },
      ],
    },
    {
      title: "Disclosure of Personal Information",
      blocks: [
        {
          type: "paragraph",
          text: "We may disclose personal information to:",
        },
        {
          type: "bullets",
          items: [
            "Service providers, including hosting, analytics, and IT services.",
            "Legal or regulatory authorities when required.",
            "Successors in connection with mergers or acquisitions.",
          ],
        },
        {
          type: "paragraph",
          text: "We do not sell personal information for monetary compensation.",
        },
      ],
    },
    {
      title: "Sharing for Cross-Context Behavioral Advertising (CPRA)",
      blocks: [
        {
          type: "paragraph",
          text: "If we engage in analytics or advertising activities that qualify as sharing under CPRA, California residents may opt out at any time using the Do Not Sell or Share My Personal Information link on our website cookie banner or by emailing vivek@pherrixtx.com.",
        },
      ],
    },
    {
      title: "California Privacy Rights (CPRA)",
      blocks: [
        {
          type: "paragraph",
          text: "California residents have the right to:",
        },
        {
          type: "bullets",
          items: [
            "Know what personal information we collect, use, disclose, or share.",
            "Request deletion of personal information, subject to exceptions.",
            "Request correction of inaccurate personal information.",
            "Opt out of sale or sharing of personal information.",
            "Limit the use and disclosure of sensitive personal information.",
            "Not be discriminated against for exercising these rights.",
          ],
        },
        {
          type: "paragraph",
          text: "Requests may be submitted to vivek@pherrixtx.com. We will verify identity before fulfilling requests and respond within required timeframes.",
        },
      ],
    },
    {
      title: "GDPR Rights (EEA/UK Residents)",
      blocks: [
        {
          type: "paragraph",
          text: "If you are located in the European Economic Area or United Kingdom, you have the right to:",
        },
        {
          type: "bullets",
          items: [
            "Access your personal data.",
            "Correct inaccurate data.",
            "Request erasure.",
            "Restrict processing.",
            "Object to processing.",
            "Data portability.",
            "Withdraw consent at any time.",
            "Lodge a complaint with a supervisory authority.",
          ],
        },
        {
          type: "paragraph",
          text: "Our lawful bases for processing include consent, contractual necessity, legal obligation, and legitimate interests.",
        },
      ],
    },
    {
      title: "International Transfers",
      blocks: [
        {
          type: "paragraph",
          text: "Personal information may be transferred outside your jurisdiction. Where required, we implement appropriate safeguards such as Standard Contractual Clauses.",
        },
      ],
    },
    {
      title: "Data Retention",
      blocks: [
        {
          type: "paragraph",
          text: "We retain personal information only as long as necessary for the purposes described in this Policy or as required by law.",
        },
      ],
    },
    {
      title: "Cookies and Tracking Technologies",
      blocks: [
        {
          type: "paragraph",
          text: "We use cookies and similar technologies to improve functionality and analyze usage. You may control cookies through browser settings or cookie preference tools.",
        },
      ],
    },
    {
      title: "Data Security",
      blocks: [
        {
          type: "paragraph",
          text: "We implement reasonable administrative, technical, and physical safeguards to protect personal information. However, no system can guarantee complete security.",
        },
      ],
    },
    {
      title: "Updates to This Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy periodically. The Last Updated date reflects the latest revision.",
        },
      ],
    },
    {
      title: "Contact Information",
      blocks: [
        {
          type: "paragraph",
          text: "Pherrix Inc. Email: vivek@pherrixtx.com.",
        },
      ],
    },
  ],
};
