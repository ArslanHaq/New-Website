"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  ChevronDown,
  Loader2,
} from "lucide-react";
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

function getValidationMessage(form: FormState) {
  if (form.name.trim().length < 2) {
    return "Please enter your name.";
  }

  if (!/\S+@\S+\.\S+/.test(form.email)) {
    return "Please enter a valid email address.";
  }

  if (!form.interest.trim()) {
    return "Please select an area of interest.";
  }

  if (form.message.trim().length < 10) {
    return "Please enter at least 10 characters in the message.";
  }

  return "";
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });
  const [pending, setPending] = useState(false);
  const [interestOpen, setInterestOpen] = useState(false);
  const [activeInterestIndex, setActiveInterestIndex] = useState(0);
  const interestRef = useRef<HTMLDivElement>(null);

  const canSubmit = useMemo(() => {
    return getValidationMessage(form) === "";
  }, [form]);

  const updateField =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (
        interestRef.current &&
        !interestRef.current.contains(event.target as Node)
      ) {
        setInterestOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, []);

  function selectInterest(option: string) {
    setForm((current) => ({ ...current, interest: option }));
    setInterestOpen(false);
    setSubmitState({ status: "idle", message: "" });
  }

  function onInterestKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      setInterestOpen(false);
      return;
    }

    if (!interestOpen && ["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      const selectedIndex = Math.max(interestOptions.indexOf(form.interest), 0);
      setActiveInterestIndex(selectedIndex);
      setInterestOpen(true);
      return;
    }

    if (!interestOpen) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveInterestIndex((index) => (index + 1) % interestOptions.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveInterestIndex(
        (index) => (index - 1 + interestOptions.length) % interestOptions.length,
      );
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectInterest(interestOptions[activeInterestIndex]);
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ status: "idle", message: "" });

    if (!canSubmit) {
      setSubmitState({
        status: "error",
        message: getValidationMessage(form),
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
    <form className="grid gap-5" onSubmit={onSubmit} noValidate>
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
        <div
          ref={interestRef}
          className="relative"
          onKeyDown={onInterestKeyDown}
        >
          <input type="hidden" name="interest" value={form.interest} />
          <button
            type="button"
            id="interest"
            className={[
              "field flex min-h-[50px] items-center justify-between gap-3 text-left",
              interestOpen ? "border-marine ring-4 ring-marine/10" : "",
              form.interest ? "text-ink" : "text-quiet",
            ].join(" ")}
            onClick={() => {
              const selectedIndex = Math.max(
                interestOptions.indexOf(form.interest),
                0,
              );
              setActiveInterestIndex(selectedIndex);
              setInterestOpen((open) => !open);
            }}
            aria-haspopup="listbox"
            aria-expanded={interestOpen}
            aria-controls="interest-options"
          >
            <span>{form.interest || "Select one..."}</span>
            <ChevronDown
              className={[
                "h-4 w-4 shrink-0 text-marine transition",
                interestOpen ? "rotate-180 text-[#EA7B1F]" : "",
              ].join(" ")}
            />
          </button>

          {interestOpen ? (
            <div
              id="interest-options"
              role="listbox"
              aria-label="Area of interest"
              className="absolute left-0 right-0 top-[calc(100%+0.55rem)] z-30 overflow-hidden rounded-2xl border border-white/60 bg-white p-2 shadow-[0_24px_60px_rgba(12,45,90,0.18)] ring-1 ring-line/70"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(248,251,255,0.96)_48%,rgba(255,246,238,0.98))]" />
              <div className="relative grid gap-1">
                {interestOptions.map((option, index) => {
                  const selected = form.interest === option;
                  const active = activeInterestIndex === index;

                  return (
                    <button
                      key={option}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      className={[
                        "flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition",
                        selected
                          ? "bg-orange-flow text-white shadow-[0_10px_24px_rgba(234,123,31,0.2)]"
                          : active
                            ? "bg-mist text-ink"
                            : "text-muted hover:bg-mist hover:text-ink",
                      ].join(" ")}
                      onMouseEnter={() => setActiveInterestIndex(index)}
                      onClick={() => selectInterest(option)}
                    >
                      <span>{option}</span>
                      {selected ? <Check className="h-4 w-4" /> : null}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
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
        <p className="mt-2 text-xs text-muted">
          Minimum 10 characters. Current: {form.message.trim().length}
        </p>
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
        disabled={pending}
        className={[
          "inline-flex w-fit items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition",
          "bg-orange-flow shadow-[0_8px_24px_rgba(217,122,62,0.2)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(217,122,62,0.3)]",
          !canSubmit ? "ring-1 ring-orange-200/70" : "",
          "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none",
        ].join(" ")}
      >
        {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {pending ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
