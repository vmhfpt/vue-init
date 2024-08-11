import { z } from 'zod'
export const schemaDetailAppointment = z.object({
  consumables: z.array(z.string()).min(1, 'すくなくとも1つのオプションをせんたくしてください'),
  components: z.array(z.string()).min(1, 'すくなくとも1つのオプションをせんたくしてください'),
  purposes: z.array(z.string()).min(1, 'すくなくとも1つのオプションをせんたくしてください')
})

export const schemaSchedule = z.object({
  schedules: z
    .array(
      z.object({
        name: z.any(),
        date: z.any(),
        time: z.any()
      })
    )
    .superRefine((schedules, ctx) => {
      const allDateEmpty = schedules.every((schedule) => schedule.date === null)
      if (allDateEmpty) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [`required`],
          message: '少なくとも 1 つの時間枠を選択してください'
        })
      }
      schedules.map((schedule, index) => {
        if (schedule.date && !schedule.time) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: [`${index}.time`],
            message: '時間を入力してください'
          })
        }
      })
    })
})
