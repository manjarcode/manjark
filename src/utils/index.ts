import { DateRangeType } from "@/components/dateRange/dateRange"

export const initialDateRange = (): DateRangeType => {
  const today = new Date()
  const start = new Date(today.getFullYear(), today.getMonth(), 1)
  const end = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  return { start, end }
}