import dayjs, { Dayjs } from 'dayjs'

export const disabledDate = (current: Dayjs) => {
  return current && current < dayjs().startOf('day')
}

export const disabledHours = (selectedDate: Dayjs | null) => {
  const officeHours = { start: 7, end: 17 }

  if (selectedDate && dayjs(selectedDate).isSame(dayjs(), 'day')) {
    const currentHour = dayjs().hour()
    return [
      ...Array(officeHours.start).keys(),
      ...Array.from({ length: 24 - officeHours.end }, (_, i) => i + officeHours.end), // Disable hours after office end
      ...Array.from({ length: currentHour - officeHours.start }, (_, i) => i + officeHours.start) // Disable past hours
    ]
  }

  return [
    ...Array(officeHours.start).keys(),
    ...Array.from({ length: 24 - officeHours.end }, (_, i) => i + officeHours.end)
  ]
}

export const disabledMinutes = (selectedDate: Dayjs | null, selectedHour: number) => {
  if (selectedDate && dayjs(selectedDate).isSame(dayjs(), 'day')) {
    const currentHour = dayjs().hour()
    const currentMinute = dayjs().minute()

    if (selectedHour === currentHour) {
      return Array.from({ length: currentMinute }, (_, i) => i)
    }
  }
  return []
}
