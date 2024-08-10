import { z } from 'zod'
export const schemaDetailAppointment = z.object({
  consumables: z.array(z.string()).min(1, 'すくなくとも1つのオプションをせんたくしてください'),
  components: z.array(z.string()).min(1, 'すくなくとも1つのオプションをせんたくしてください'),
  purposes: z.array(z.string()).min(1, 'すくなくとも1つのオプションをせんたくしてください')
})
