import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navigation from "../components/Layout/Navigation/Navigation";
import Header from "../components/Header";
import Footer from "../components/Layout/Footer/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.eddieorozco.com/"),
  title: {
    default: "Eddie – CMS Specialist, Web Developer",
    template: "%s | Eddie – CMS Specialist, Web Developer",
  },
  description:
    "I manage enterprise web content and publishing workflows across large-scale CMS platforms, combining content operations expertise with front-end and HTML email development experience.",
  keywords: [
    "Eddie",
    "Frontend Developer",
    "HTML Email Developer",
    "Email Developer",
    "MJML",
    "CMS Specialist",
    "Content Management System",
    "Klaviyo",
    "WordPress",
    "Shopify",
    "Sitecore",
    "HubSpot",
    "Git",
    "Design",
    "Web Publishing",
    "Bootstrap",
    "React",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "CSS",
    "CSS3",
    "SASS",
    "HTML5",
    "HTML",
    "CMS",
    "Developer",
    "Responsive Design",
    "Web Portfolio",
    "Google Analytics",
    "PostHog"
  ],
  authors: [{ name: "Eddie" }],
  openGraph: {
    type: "website",
    url: "https://www.eddieorozco.com/",
    siteName: "Eddie – CMS Specialist, Web Developer",
    title: "Eddie – CMS Specialist, Web Developer",
    description:
      "Showcasing projects, skills, and innovative web development work.",
    images: [
      {
        url: "/og-portfolio.jpg", // put a 1200x630 image in /public
        width: 1200,
        height: 630,
        alt: "Eddie – CMS Specialist, Web Developer",
      },
    ],
    locale: "en_US",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Eddie – Frontend Developer",
  //   description:
  //     "Front-end developer passionate about creating innovative web solutions.",
  //   images: ["/og-portfolio.jpg"],
  //   creator: "@eddieorozco", // optional: your Twitter handle
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
    { url: "/favicon.ico" },
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {/* Skip link for keyboard users */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:z-50 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header/>
        {/* <Navigation /> */}
        <main id="content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* Google tag (gtag.js)  */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-52XWVYJFKD"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-52XWVYJFKD');
          `}
        </Script>
        <Script
            src="https://t.contentsquare.net/uxa/9a3c8928b863f.js"
            strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
