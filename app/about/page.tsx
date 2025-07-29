import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "A lot of keywords",
  keywords: ["about", "page", "next.js"],
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "About Page",
    description: "A lot of keywords",
  },
};

const About = () => {
  console.log("Hey is this in the server or client?");
  return <div>About Page</div>;
};

export default About;
