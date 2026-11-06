import React from "react";
import FooterBand from "@/components/FooterBand";

const DOMAIN = "yourdomain.com";

export default function PrivacyPolicy() {
  return (
    <div className="w-full flex flex-col items-center bg-white min-h-screen">
      <div className="md:max-w-[788px] w-full px-[28px] md:px-0">
        <h1 className="font-['Roboto',sans-serif] font-bold text-[32px] text-black text-center pt-[48px]">
          Privacy Policy
        </h1>

        <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] text-black text-left mt-[36px] mb-[12px]">
          Information We Collect
        </h2>
        <p className="font-['Roboto',sans-serif] font-normal text-[16px] leading-[1.6] text-black text-left">
          We may collect information you provide directly, such as your name and email address, as well
          as data gathered automatically through your browser, including IP address and browsing
          activity on {DOMAIN}.
        </p>

        <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] text-black text-left mt-[36px] mb-[12px]">
          How We Use It
        </h2>
        <p className="font-['Roboto',sans-serif] font-normal text-[16px] leading-[1.6] text-black text-left">
          We use the information we collect to operate and improve {DOMAIN}, deliver the content and
          offers you request, and analyze how visitors interact with our site.
        </p>

        <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] text-black text-left mt-[36px] mb-[12px]">
          Cookies &amp; Tracking
        </h2>
        <p className="font-['Roboto',sans-serif] font-normal text-[16px] leading-[1.6] text-black text-left">
          {DOMAIN} uses cookies and similar tracking technologies to remember your preferences and
          measure traffic. You may disable cookies in your browser settings, though some features may
          not function as intended.
        </p>

        <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] text-black text-left mt-[36px] mb-[12px]">
          Security
        </h2>
        <p className="font-['Roboto',sans-serif] font-normal text-[16px] leading-[1.6] text-black text-left">
          We apply reasonable safeguards to protect the information we collect, but no method of
          transmission or storage is fully secure, and we cannot guarantee absolute protection.
        </p>
      </div>
      <FooterBand />
    </div>
  );
}