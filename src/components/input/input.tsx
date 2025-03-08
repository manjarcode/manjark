import { Field } from '@ark-ui/react/field'

export const Input = ({label, placeholder, description, className, value, onChange}: InputProps) => {
  return (
    <Field.Root className={className}>
      {label && 
        <Field.Label className="text-sm font-medium text-gray-700 block mb-2">
          {label}
        </Field.Label>
      }

      <Field.Input
        className="block border border-gray-300 rounded-sm px-2 py-1 text-black placeholder-gray-400 focus:outline-none focus:ring focus:ring-gray-400/50 mb-2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {description && 
        <Field.HelperText className="block text-xs text-gray-500 mb-2">
          {description}
        </Field.HelperText>
      }      
      <Field.ErrorText className="block text-xs text-red-500">
        Error Info Here
      </Field.ErrorText>
    </Field.Root>
  )
}


type InputProps = {
  label?: string
  placeholder?: string
  description?: string
  className?: string,
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}