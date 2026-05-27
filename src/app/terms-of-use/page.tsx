import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { termsOfUse } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsOfUsePage() {
  return <LegalDocument document={termsOfUse} />;
}
