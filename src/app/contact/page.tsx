import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact for XinChat ",
  description: "This is Contact Page for XinChat",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" description="" />

      <Contact />
    </>
  );
};

export default ContactPage;
