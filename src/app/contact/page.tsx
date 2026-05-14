import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { AppIcon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { contactHero, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero hero={contactHero} />

      <Section className="pt-2">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <div>
              <h2 className="text-2xl font-semibold text-ink">Get in touch</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-muted">
                Whether you are a pharmaceutical partner, academic collaborator,
                or investor, we would like to hear from you.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-marine">
                    <AppIcon name="user" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Vivek Shinde Patil, PhD
                    </p>
                    <p className="text-xs text-muted">Co-Founder & CEO</p>
                  </div>
                </div>

                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 rounded-xl transition hover:bg-mist"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-marine">
                    <AppIcon name="mail" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {site.email}
                    </p>
                    <p className="text-xs text-muted">General inquiries</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 rounded-xl bg-mist p-6">
                <h3 className="text-sm font-semibold text-ink">
                  Areas of interest
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Strategic partnerships & licensing, clinical collaboration,
                  investment opportunities, academic research collaboration, and
                  CMC & manufacturing partnerships.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
