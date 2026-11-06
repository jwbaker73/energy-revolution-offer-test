import React from "react";
import FooterBand from "@/components/FooterBand";

const DOMAIN = "yourdomain.com";

export default function TermsConditions() {
  return (
    <div className="w-full flex flex-col items-center bg-white min-h-screen">
      <div className="md:max-w-[788px] w-full px-[28px] md:px-0">
        <h1 className="font-['Roboto',sans-serif] font-bold text-[32px] text-black text-center pt-[48px]">
          Terms &amp; Conditions
        </h1>

        <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] text-black text-left mt-[36px] mb-[12px]">
          Acceptance of Terms
        </h2>
        <p className="font-['Roboto',sans-serif] font-normal text-[16px] leading-[1.6] text-black text-left">
          By accessing or using {DOMAIN}, you agree to these Terms &amp; Conditions. If you do not
          agree, please do not use this site.
        </p>

        <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] text-black text-left mt-[36px] mb-[12px]">
          Use of Site
        </h2>
        <p className="font-['Roboto',sans-serif] font-normal text-[16px] leading-[1.6] text-black text-left">
          You may use {DOMAIN} for lawful purposes only. You agree not to disrupt the site, attempt to
          gain unauthorized access, or use its content in a way that infringes the rights of others.
        </p>

        <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] text-black text-left mt-[36px] mb-[12px]">
          Affiliate Links Disclaimer
        </h2>
        <p className="font-['Roboto',sans-serif] font-normal text-[16px] leading-[1.6] text-black text-left">
          {DOMAIN} may contain affiliate links, and we may receive compensation for purchases made
          through those links, at no additional cost to you.
        </p>

        <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] text-black text-left mt-[36px] mb-[12px]">
          Results Disclaimer
        </h2>
        <p className="font-['Roboto',sans-serif] font-normal text-[16px] leading-[1.6] text-black text-left">
          Any results shown on {DOMAIN} are illustrative and not typical. Individual results may vary,
          and we make no guarantee that you will achieve any particular outcome.
        </p>

        <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] text-black text-left mt-[36px] mb-[12px]">
          Limitation of Liability
        </h2>
        <p className="font-['Roboto',sans-serif] font-normal text-[16px] leading-[1.6] text-black text-left">
          {DOMAIN} and its content are provided "as is." To the fullest extent permitted by law, we are
          not liable for any damages arising from your use of, or reliance on, this site or its content.
        </p>
      </div>
      <FooterBand />
    </div>
  );
}