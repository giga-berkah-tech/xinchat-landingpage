import { TermService } from "@/components/TermService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Policy Xinchat",
  description: "This is Privacy & Policy for Xinchat",
  // other metadata
};

const TermServicePage = () => {
  return (
    <>
      <TermService />
    </>
  );
};

export default TermServicePage;
