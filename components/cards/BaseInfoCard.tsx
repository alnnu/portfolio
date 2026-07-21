export default function BaseInfoCard({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="w-full rounded-xl bg-muted-foreground/10 p-6 sm:p-8 transition-all hover:border hover:border-primary/45 hover:shadow-lg hover:shadow-primary/15">
      <h4 className="text-2xl sm:text-3xl font-bold text-primary">{title}</h4>
      <p className="text-sm sm:text-base text-muted-foreground">{text}</p>
    </div>
  )
}

