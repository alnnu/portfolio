export default function BaseInfoCard({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="w-fit rounded-xl bg-muted-foreground/10 p-8 hover:border hover:border-primary/45 hover:shadow-lg hover:shadow-primary/15">
      <h4 className="text-3xl font-bold text-primary">{title}</h4>
      <p>{text}</p>
    </div>
  )
}
