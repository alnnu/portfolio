export default function ContactInfo({
  label,
  value,
  icon,
}: {
  label: string
  value: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex h-fit items-center gap-x-3 sm:gap-x-4 rounded-xl border bg-background p-3.5 sm:p-4 min-w-0">
      <div className="flex shrink-0 items-center justify-center rounded-xl bg-primary/10 p-2 sm:p-2.5 text-primary [&>svg]:size-5 sm:[&>svg]:size-6">
        {icon}
      </div>
      <div className="min-w-0 flex-1 overflow-hidden">
        <p className="text-xs sm:text-sm font-medium text-muted-foreground capitalize">{label}</p>
        <p className="text-sm sm:text-base font-semibold text-foreground truncate">{value}</p>
      </div>
    </div>
  )
}

