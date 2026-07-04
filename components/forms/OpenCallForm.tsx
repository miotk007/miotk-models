"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Field } from "./Field";
import { EASE_EDITORIAL } from "@/lib/motion";
import {
  isEmpty,
  validateOpenCall,
  type Errors,
  type OpenCallInput,
} from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

const EMPTY: OpenCallInput = {
  name: "",
  email: "",
  city: "",
  instagram: "",
  height: "",
  age: "",
};

export function OpenCallForm() {
  const [values, setValues] = useState<OpenCallInput>(EMPTY);
  const [errors, setErrors] = useState<Errors<OpenCallInput>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof OpenCallInput) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validateOpenCall(values);
    setErrors(next);
    if (!isEmpty(next)) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "open-call", payload: values }),
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
            Thank you.
          </h2>
          <p className="mt-6 max-w-[36ch] font-sans text-sm font-light leading-loose text-muted">
            Your application is with us. If there is a fit, you will hear from us
            directly.
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
            <Field label="Full name" name="name" value={values.name} onChange={set("name")} error={errors.name} autoComplete="name" />
            <Field label="Email" name="email" type="email" value={values.email} onChange={set("email")} error={errors.email} autoComplete="email" />
            <Field label="Based in" name="city" value={values.city} onChange={set("city")} error={errors.city} />
            <Field label="Instagram" name="instagram" value={values.instagram} onChange={set("instagram")} error={errors.instagram} />
            <Field label="Height (cm)" name="height" value={values.height} onChange={set("height")} error={errors.height} placeholder="186" />
            <Field label="Age" name="age" value={values.age} onChange={set("age")} error={errors.age} />
          </div>

          <div className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="max-w-[32ch] font-sans text-[10px] font-light leading-relaxed text-faint">
              {status === "error"
                ? "Something went wrong. Please try again, or email us directly."
                : "By applying you agree to be considered for representation."}
            </span>
            <button
              type="submit"
              disabled={status === "loading"}
              className="whitespace-nowrap border-b border-fg pb-[7px] font-display text-2xl text-fg transition-colors duration-500 hover:text-muted disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : "Submit application →"}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
