import { ToggleGroup as ArkToggleGroup } from '@ark-ui/react/toggle-group'
import { type ToggleGroupValueChangeDetails } from "@ark-ui/react"

export const ToggleGroup = ({children, value, label, className, onChange, ...props}: ToggleGroupProps) => {
  const customClassName = `flex ${className}`
  const handleValueChange = (details: ToggleGroupValueChangeDetails) => {
    const selectedValue = details?.value[0]
    if (onChange) {
      onChange(selectedValue)
    }
  }
  return (
    <>{label && <label className="block mb-1">{label}</label>}
    <ArkToggleGroup.Root className={customClassName} onValueChange={handleValueChange} value={[value]} {...props}>
      {children}
    </ArkToggleGroup.Root>
    </>
  )
}

const ToggleGroupItem = ({children, value, className, ...props}: ToggleGroupItemProps) => {
  const customClassName = `cursor-pointer p-2 bg-gray-200 text-black hover:bg-gray-300 flex items-center justify-center focus-visible:outline-gray-400 data-[state=on]:bg-gray-400 data-[state=on]:text-white first:rounded-l-sm last:rounded-r-sm ${className}`
  return (<ArkToggleGroup.Item
    value={value}
    className={customClassName}
    {...props}
  >
    {children}
  </ArkToggleGroup.Item>)
}

ToggleGroup.Item = ToggleGroupItem

type ToggleGroupProps = {
  children: React.ReactNode,
  value: string,
  label?: string,
  className?: string,
  onChange?: (arg0: string) => void,
}

type ToggleGroupItemProps = {
  children: React.ReactNode,
  value: string,
  className?: string
}