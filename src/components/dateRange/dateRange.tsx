
export const DateRange = ({value, className, onChange } : DateRangeProps)  => {
  const handleChangeMonth = (date: Date) => {
    const dateRange = getMonthRange(date)
    onChange(dateRange)
  }

  const handlePrevMonth = () => {
    const { start } = value
    const prevDate = new Date(start.getFullYear(), start.getMonth() - 1, 1)
    handleChangeMonth(prevDate)
  }

  const handleNextMonth = () => {
    const { end } = value
    const nextDate = new Date(end.getFullYear(), end.getMonth() + 1, 1)
    handleChangeMonth(nextDate) 
  }

  const buttonClass = "px-4 py-2 cursor-pointer hover:bg-primary-hover"

  return (
    <div className={`flex items-center gap-2 border-1 border-primary rounded-sm w-fit ${className}`}>
      <button type="button" className={buttonClass} onClick={handlePrevMonth}> &lt;</button>
      <span className="min-w-40 text-center">{getMonthName(value.start)}</span>
      <button type="button" className={buttonClass} onClick={handleNextMonth}> &gt;</button>
    </div>
  )
}

const getMonthRange = (date: Date) =>  {
  const start = new Date(date.getFullYear(), date.getMonth(), 1)
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  return { start, end }
}

const getMonthName = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' }
  return capitalizeFirstLetter(date.toLocaleDateString('es-ES', options))
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

type DateRangeProps = {
  value: DateRangeType,
  className?: string,
  onChange: (dateRange: DateRangeType) => void
} 


export type DateRangeType = {
  start: Date,
  end: Date
}