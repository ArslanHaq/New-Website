import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return <LegalDocument document={privacyPolicy} />;
}
