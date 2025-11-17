export function Section({
  id,
  className = "",
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={`py-5 sm:py-14 ${className}`}>
      {children}
    </section>
  )
}
