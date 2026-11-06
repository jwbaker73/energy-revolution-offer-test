import React from "react";
import { Link } from "react-router-dom";

const DOMAIN = "yourdomain.com";

export default function FooterBand() {
  return (
    <div className="w-full bg-[#F1F1F1] mt-[40px] pt-[16px] pb-[24px] flex flex-col items-center">
      <div className="flex items-center gap-[30px]">
        <Link
          to="/privacy-policy"
          className="font-['Yantramanav',sans-serif] font-bold text-[14px] text-[#5B5A5A]"
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms-conditions"
          className="font-['Yantramanav',sans-serif] font-bold text-[14px] text-[#5B5A5A]"
        >
          Terms &amp; Conditions
        </Link>
      </div>
      <p className="font-['Roboto',sans-serif] font-normal text-[14px] text-[#5B5A5A] text-center max-w-[840px] mt-[30px] px-[28px]">
        This site is not a part of Facebook and is not endorsed by Facebook. FACEBOOK is a trademark
        of Meta Platforms, Inc. This site is not associated with the official parent companies or
        merchants of any promoted products. This site owner may receive compensation for purchases
        made through links on this site.
      </p>
      <p className="font-['Yantramanav',sans-serif] font-bold text-[14px] text-[#5B5A5A] text-center mt-[30px]">
        Copyright 2025 by {DOMAIN}. All rights reserved.
      </p>
    </div>
  );
}