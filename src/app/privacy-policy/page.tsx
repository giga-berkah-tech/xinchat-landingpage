import { PrivacyPolicy } from "@/components/PrivacyPolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Policy XinLeo",
  description: "This is Privacy & Policy for XinLeo",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
