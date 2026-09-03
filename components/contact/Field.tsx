import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const control =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3.5 font-sans text-body text-ink transition-colors duration-(--duration-quick) ease-editorial placeholder:text-quiet focus:border-burgundy focus:outline-none focus:ring-0";

type FieldLabelling = {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
};

type FieldShellProps = FieldLabelling & { children: React.ReactNode };

/**
 * Labels sit above the control and stay visible — placeholder-only labelling
 * disappears the moment someone starts typing, which is exactly when it is
 * needed most.
 */
export function FieldShell({
  id,
  label,
  error,
  optional,
  children,
  className,
}: FieldShellProps) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      <label
        htmlFor={id}
        className="flex items-baseline gap-3 font-sans text-label font-medium uppercase tracking-[0.18em] text-stone"
      >
        {label}
        {optional ? (
          <span className="font-normal normal-case tracking-normal text-quiet">
            optional
          </span>
        ) : null}
      </label>

      {/* Pushed to the bottom so fields sitting side by side keep a shared
          baseline even when one label wraps to a second line. */}
      <div className="mt-auto">{children}</div>

      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2.5 font-sans text-small text-burgundy"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  id,
  label,
  error,
  optional,
  className,
  ...props
}: FieldLabelling & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldShell
      id={id}
      label={label}
      error={error}
      optional={optional}
      className={className}
    >
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={control}
        {...props}
      />
    </FieldShell>
  );
}

export function TextArea({
  id,
  label,
  error,
  optional,
  className,
  ...props
}: FieldLabelling & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldShell
      id={id}
      label={label}
      error={error}
      optional={optional}
      className={className}
    >
      <textarea
        id={id}
        rows={5}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, "resize-y")}
        {...props}
      />
    </FieldShell>
  );
}

export function SelectField({
  id,
  label,
  error,
  optional,
  options,
  placeholder,
  className,
  ...props
}: FieldLabelling & {
  options: readonly string[];
  placeholder: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldShell
      id={id}
      label={label}
      error={error}
      optional={optional}
      className={className}
    >
      <div className="relative">
        <select
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            control,
            "cursor-pointer appearance-none truncate pr-7",
            // Until something is chosen, the placeholder option should read as
            // a placeholder rather than as an answer.
            "has-[option[value='']:checked]:text-quiet",
          )}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden
          strokeWidth={1.25}
          className="pointer-events-none absolute right-0 bottom-4 size-4 text-stone"
        />
      </div>
    </FieldShell>
  );
}
