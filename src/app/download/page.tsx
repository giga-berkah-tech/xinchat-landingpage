import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Page for XinChat",
  description: "This is download page for XinChat",
  // other metadata
};

const DownloadPage = () => {
  return (
    <>
      <Breadcrumb pageName="Download Page" description="" />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default DownloadPage;
