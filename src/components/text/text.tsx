
import { HTMLProps, ReactNode } from 'react';

export default function Text ({children, as: ElementType = 'p', className, ...props}: TextProps) {
  const calculatedClassName = className ?? 'text-[1em]'
  return (
    <ElementType {...props} className={calculatedClassName}>
      {children}
    </ElementType>
  )
}

Text.Title = ({children, as: ElementType = 'h1', className, ...props}: TextProps) => {
  const calculatedClassName = className ?? 'text-[2em]'
  return (  
    <Text as={ElementType} {...props} className={calculatedClassName}>
      {children}
    </Text>
  )
}

type TextProps = {
  children: ReactNode
  as?: React.ElementType
  className?: string
} & HTMLProps<HTMLParagraphElement>
