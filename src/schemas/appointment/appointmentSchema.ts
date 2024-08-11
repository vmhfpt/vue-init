import { z } from 'zod'
export const schemaDetailAppointment = z.object({
  consumables: z.array(z.string()).min(1, 'すくなくとも1つのオプションをせんたくしてください'),
  components: z.array(z.string()).min(1, 'すくなくとも1つのオプションをせんたくしてください'),
  purposes: z.array(z.string()).min(1, 'すくなくとも1つのオプションをせんたくしてください')
})

export const schemaSchedule = z.object({
  schedules: z.array(
    z.object({
      name: z.any(),
      date: z.any(),
      time: z.any()
    })
  )
})
