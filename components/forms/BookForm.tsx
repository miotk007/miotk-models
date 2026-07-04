"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Field } from "./Field";
import { EASE_EDITORIAL } from "@/lib/motion";
import { isEmpty, validateBook, type BookInput, type Errors } from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

const EMPTY: BookInput = { brand: "", email: "", scope: "", timing: "", message: "" };

export function BookForm() {
  const [values, setValues] = useState<BookInput>(EMPTY);
  const [errors, setErrors] = useState<Errors<BookInput>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof BookInput) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validateBook(values);
    setErrors(next);
    if (!isEmpty(next)) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "book", payload: values }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_EDITORIAL }}
          className="flex min-h-[420px] flex-col items-center justify-center px-2 text-center"
        >
          <p className="eyebrow tracking-[0.36em]">Received</p>
          <h2 className="mt-8 font-display text-5xl font-normal tracking-[-0.025em]">
            We&apos;ll be in touch.
          </h2>
          <p className="mt-6 max-w-[36ch] font-sans text-sm font-light leading-loose text-muted">
            Your brief has reached the studio. Expect a reply within two working
            days.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
          noValidate
        >
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-11">
            <Field label="Brand / Company" name="brand" value={values.brand} onChange={set("brand")} error={errors.brand} autoComplete="organization" />
            <Field label="Contact email" name="email" type="email" value={values.email} onChange={set("email")} error={errors.email} autoComplete="email" />
            <Field label="Scope" name="scope" value={values.scope} onChange={set("scope")} placeholder="Talent · Production · Direction" />
            <Field label="Timing" name="timing" value={values.timing} onChange={set("timing")} />
            <Field label="About the project" name="message" value={values.message} onChange={set("message")} error={errors.message} multiline span />
          </div>

          <div className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="max-w-[32ch] font-sans text-[10px] font-light leading-relaxed text-faint">
              {status === "error"
                ? "Something went wrong. Please try again, or email us directly."
                : "Every brief is answered within two working days."}
            </span>
            <button
              type="submit"
              disabled={status === "loading"}
              className="whitespace-nowrap border-b border-fg pb-[7px] font-display text-2xl text-fg transition-colors duration-500 hover:text-muted disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : "Send brief →"}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
