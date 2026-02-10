import ScrollUp from "@/components/Common/ScrollUp";

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XinLeo Landing Page",
  description: "This is Home for XinLeo",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
    </>
  );
}
