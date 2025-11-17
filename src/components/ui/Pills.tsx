export function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-slate-200 bg-white ${className}`}
    >
      {children}
    </span>
  )
}
