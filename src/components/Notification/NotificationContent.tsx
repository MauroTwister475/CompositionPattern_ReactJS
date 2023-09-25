
interface NotificationContentProps {
  text: string, 
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div>
      <h1 className="text-sm text-white">
        {text}
      </h1>
      <span className="text-sm text-zinc-600">
        a 3 min atrás
      </span>
    </div>
  )
}