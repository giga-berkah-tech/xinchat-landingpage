import { TermService } from "@/components/TermService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Policy XinLeo",
  description: "This is Privacy & Policy for XinLeo",
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
