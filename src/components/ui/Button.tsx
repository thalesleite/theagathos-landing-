export function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-md bg-[var(--brand-accent)] text-white px-4 py-2 font-medium hover:opacity-90 transition disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
