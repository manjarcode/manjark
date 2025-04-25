import { Field } from '@ark-ui/react/field'

export const Textbox = ({ label, placeholder, description, className, value, suffix, onChange }: TextboxProps) => {  
  const inputClassName = `focus:outline-none px-2 py-1 text-black placeholder-gray-400 flex-1`
  const containerClassName = `flex border border-gray-300 rounded-sm focus-within:ring focus-within:ring-gray-400/50 ${className}`
  const suffixClassName = `flex items-center px-2 bg-gray-100  border-gray-300 rounded-r-sm`

  return (
    <Field.Root className="mb-3">
      {label && 
        <Field.Label className="font-medium text-gray-700 block mb-1">
          {label}
        </Field.Label>
      }

      <div className={containerClassName}> 
        <Field.Input
          className={inputClassName}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {suffix &&
          <span className={suffixClassName}>{suffix}</span>
        }
      </div>

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
  value?: string,
  suffix?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}