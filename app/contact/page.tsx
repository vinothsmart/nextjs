import { Metadata } from "next";
import Button from "./button";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "A lot of keywords",
  keywords: ["contact", "page", "next.js"],
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Contact Page",
    description: "A lot of keywords",
  },
};

const Contact = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();
  console.log(result);
  return (
    <div>
      <Button />
    </div>
  );
};

export default Contact;
