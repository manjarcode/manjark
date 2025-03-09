import { ToggleGroup as ArkToggleGroup } from '@ark-ui/react/toggle-group'
import { type ToggleGroupValueChangeDetails } from "@ark-ui/react"

export const ToggleGroup = ({children, value, className, onChange, ...props}: ToggleGroupProps) => {
  const customClassName = `flex ${className}`
  return (
    <ArkToggleGroup.Root className={customClassName} onValueChange={onChange} value={value} {...props}> 
      {children}
    </ArkToggleGroup.Root>
  )
}

ToggleGroup.Item = ({children, value, className, ...props}: ToggleGroupItemProps) => {
  const customClassName = `cursor-pointer p-2 bg-gray-200 text-black hover:bg-gray-300 flex items-center justify-center focus-visible:outline-gray-400 data-[state=on]:bg-gray-400 data-[state=on]:text-white first:rounded-l-sm last:rounded-r-sm ${className}`
  return (<ArkToggleGroup.Item
    value={value}
    className={customClassName}
    {...props}
  >
    {children}
  </ArkToggleGroup.Item>)
}

type ToggleGroupProps = {
  children: React.ReactNode,
  value: string[],
  className?: string,
  onChange?: (details: ToggleGroupValueChangeDetails) => void,
}

type ToggleGroupItemProps = {
  children: React.ReactNode,
  value: string,
  className?: string
}