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
  metadataBase: new URL("https://eddthedev.com"), // replace with your real domain
  title: {
    default: "Eddie – Frontend Developer",
    template: "%s | Eddie – Frontend Developer",
  },
  description:
    "Front-end developer passionate about creating innovative web solutions and delivering exceptional user experiences.",
  keywords: [
    "Eddie",
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "CSS",
    "SASS",
    "HTML5",
    "CMS",
    "Developer",
    "Responsive Design",
    "Web Portfolio",
  ],
  authors: [{ name: "Eddie" }],
  openGraph: {
    type: "website",
    url: "https://eddthedev.com",
    siteName: "Eddie – Frontend Developer",
    title: "Eddie – Frontend Developer",
    description:
      "Showcasing projects, skills, and innovative web development work.",
    images: [
      {
        url: "/og-portfolio.jpg", // put a 1200x630 image in /public
        width: 1200,
        height: 630,
        alt: "Eddie – Frontend Developer Portfolio",
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
  //   creator: "@eddthedev", // optional: your Twitter handle
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
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
