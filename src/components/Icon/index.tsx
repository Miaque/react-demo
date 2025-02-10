import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon as IconifyIcon } from '@iconify/react'
import { KeyboardEvent } from 'react'

interface IconProps {
  // 图标名称 (支持iconify图标名称或svg图标名称)
  icon: string
  // 图标颜色
  color?: string
  // 图标大小
  size?: number | string
  // 自定义样式
  className?: string
  // 是否旋转
  spin?: boolean
  // 点击事件
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  // 键盘事件
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void
}

const Icon = ({ icon, color, size = 16, className = '', spin = false, onClick, onKeyDown }: IconProps) => {
  // 处理图标类型
  const iconType = useMemo(() => {
    if (!icon) return ''
    return icon.includes(':') ? 'iconify' : 'svg'
  }, [icon])

  // 计算样式
  const styles = useMemo(() => {
    if (iconType === 'svg') {
      return {
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        color: color
      }
    }
    return {
      fontSize: typeof size === 'number' ? `${size}px` : size,
      color: color
    }
  }, [size, color])

  // 合并className
  const classes = twMerge('inline-flex items-center justify-center', spin && 'animate-spin', className)

  // 处理键盘事件
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick?.(e as unknown as React.MouseEvent<HTMLElement>)
    }
    onKeyDown?.(e)
  }

  // 渲染不同类型的图标
  const renderIcon = () => {
    if (iconType === 'iconify') {
      return (
        <span
          className={classes}
          style={styles}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          role='button'
          tabIndex={0}
          aria-label={`${icon} icon`}
        >
          <IconifyIcon icon={icon} />
        </span>
      )
    }

    return (
      <svg
        className={classes}
        style={styles}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role='button'
        tabIndex={0}
        aria-label={`${icon} icon`}
      >
        <use href={`#icon-${icon}`} />
      </svg>
    )
  }

  return renderIcon()
}

export default Icon
