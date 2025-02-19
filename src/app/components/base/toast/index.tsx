import { ReactNode } from 'react'

export type IToastProps = {
  type?: 'success' | 'error' | 'warning' | 'info'
  size?: 'md' | 'sm'
  duration?: number
  message: string
  children?: ReactNode
  onClose?: () => void
  className?: string
}

function Toast({ type = 'info', size = 'md', message, children, className }: IToastProps) {
  return null
}

export default Toast
