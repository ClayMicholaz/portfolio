import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import {
  siteDescription,
  siteName,
  siteUrl,
  socialLinks,
} from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Full-Stack Developer`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Clay Micholaz",
    "Clay Micholaz Fu",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Portfolio",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} — Full-Stack Developer`,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteName} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Full-Stack Developer`,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  jobTitle: "Full-Stack Developer",
  description: siteDescription,
  email: "mailto:claymicholaz@gmail.com",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bunda Mulia University",
  },
  knowsAbout: [
    "Full-Stack Development",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Software Engineering",
    "Python",
    "MySQL",
    "MongoDB",
    "Supabase",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ],
  sameAs: [socialLinks.github, socialLinks.linkedin, socialLinks.instagram],

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
