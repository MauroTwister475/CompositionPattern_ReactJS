import { ElementType } from "react"

interface NotificationIconProps {
  icon: ElementType, 
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return (
    <Icon className='w-14 h-14 text-violet-500' />
  )
}