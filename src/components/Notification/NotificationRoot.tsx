import { ReactNode } from "react"

interface NotificationRootProps {
  children: ReactNode, 
}

export function NotificationRoot({ children}: NotificationRootProps) {
  return (
    <div className="w-full py-4 border-t border-zinc-800 flex items-center justify-center bg-zinc-900 px-6 gap-4">
      {children}
    </div>
  )
}