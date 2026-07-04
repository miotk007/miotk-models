import { clsx } from "@/lib/clsx";

/**
 * Editorial form field: label above, hairline-underlined input. Supports text,
 * email, and multiline. Error text replaces nothing — it appears beneath in a
 * quiet tone, keeping the layout stable.
 */
export function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  multiline = false,
  span = false,
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  placeholder?: string;
  error?: string;
  multiline?: boolean;
  span?: boolean;
  autoComplete?: string;
}) {
  const inputCls =
    "w-full bg-transparent border-0 border-b border-line pb-3 pt-1 font-sans text-[17px] font-light text-fg outline-none placeholder:text-faint focus:border-fg transition-colors duration-500";

  return (
    <label className={clsx("block", span && "sm:col-span-2")}>
      <span className="mb-3.5 block font-sans text-[9px] font-light uppercase tracking-[0.24em] text-muted">
        {label}
      </span>
      {multiline ? (
        <textarea
          name={name}
          rows={3}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(inputCls, "resize-none leading-relaxed")}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        />
      )}
      {error ? (
        <span className="mt-2 block font-sans text-[10px] font-light tracking-[0.02em] text-muted">
          {error}
        </span>
      ) : null}
    </label>
  );
}
