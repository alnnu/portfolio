export default function ContactInfo({
  label,
  value,
  icon,
}: {
  label: string
  value: string
  icon: any
}) {
  return (
    <div className="flex h-fit items-center gap-x-4 rounded-xl border bg-background p-4">
      <div className="flex items-center justify-center rounded-xl bg-primary/10 p-2 text-primary [&>svg]:size-6">
        {icon}
      </div>
      <div>
        <p>{label}</p>
        <p>{value}</p>
      </div>
    </div>
  )
}
