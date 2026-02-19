"use client";

import { useState } from "react";
import GetQuoteModal from "./GetQuoteModal";

interface QuoteCtaButtonProps {
  label: string;
  className?: string;
}

export default function QuoteCtaButton({
  label,
  className,
}: QuoteCtaButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {label}
      </button>
      <GetQuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
