"use client";

import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { interestOptions } from "@/lib/content";

type FormState = {
  name: string;
  email: string;
  organization: string;
  interest: string;
  message: string;
  companyWebsite: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  organization: "",
  interest: "",
  message: "",
  companyWebsite: "",
};

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });
  const [pending, setPending] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.interest.trim().length > 0 &&
      form.message.trim().length >= 10
    );
  }, [form]);

  const updateField =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ status: "idle", message: "" });

    if (!canSubmit) {
      setSubmitState({
        status: "error",
        message: "Please complete the required fields before sending.",
      });
      return;
    }

    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your inquiry.");
      }

      setSubmitState({
        status: "success",
        message: data.message || "Your inquiry has been sent.",
      });
      setForm(initialState);
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your inquiry. Please try again.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="grid gap-5" onSubmit={onSubmit}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          value={form.companyWebsite}
          onChange={updateField("companyWebsite")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="name">
          Name
        </label>
        <input
          className="field"
          id="name"
          name="name"
          value={form.name}
          onChange={updateField("name")}
          placeholder="Your full name"
          autoComplete="name"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="email">
          Email
        </label>
        <input
          className="field"
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={updateField("email")}
          placeholder="you@company.com"
          autoComplete="email"
          required
        />
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-semibold text-ink"
          htmlFor="organization"
        >
          Organization
        </label>
        <input
          className="field"
          id="organization"
          name="organization"
          value={form.organization}
          onChange={updateField("organization")}
          placeholder="Company or institution"
          autoComplete="organization"
        />
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-semibold text-ink"
          htmlFor="interest"
        >
          Area of interest
        </label>
        <select
          className="field"
          id="interest"
          name="interest"
          value={form.interest}
          onChange={updateField("interest")}
          required
        >
          <option value="">Select one...</option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-semibold text-ink"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="field min-h-36 resize-y"
          id="message"
          name="message"
          value={form.message}
          onChange={updateField("message")}
          placeholder="Tell us about your interest in Pherrix..."
          required
        />
      </div>

      {submitState.status !== "idle" ? (
        <div
          className={[
            "flex items-start gap-3 rounded-xl px-4 py-3 text-sm",
            submitState.status === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800",
          ].join(" ")}
          role={submitState.status === "error" ? "alert" : "status"}
        >
          {submitState.status === "success" ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          {submitState.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={pending || !canSubmit}
        className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-orange-flow px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(217,122,62,0.28)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {pending ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
