import { PrivacyPolicy } from "@/components/PrivacyPolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Policy Xinchat",
  description: "This is Privacy & Policy for Xinchat",
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
