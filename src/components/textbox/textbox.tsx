import { Field } from '@ark-ui/react/field'

export const Textbox = ({label, placeholder, description, className, value, onChange}: TextboxProps) => {
  const inputClassName = `block border border-gray-300 rounded-sm px-2 py-1 text-black placeholder-gray-400 focus:outline-none focus:ring focus:ring-gray-400/50 mb-1 ${className}`
  return (
    <Field.Root className="mb-3">
      {label && 
        <Field.Label className="font-medium text-gray-700 block mb-1">
          {label}
        </Field.Label>
      }

      <Field.Input
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {description && 
        <Field.HelperText className="block text-gray-500">
          {description}
        </Field.HelperText>
      }
    </Field.Root>
  )
}


type TextboxProps = {
  label?: string
  placeholder?: string
  description?: string
  className?: string,
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}