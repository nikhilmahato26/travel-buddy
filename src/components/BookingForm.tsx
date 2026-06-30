import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { MapPin, CalendarDays, CalendarCheck, Users, Compass, Search } from 'lucide-react'
import { waLink } from '../data/site'

interface FormValues {
  destination: string
  departure: string
  returnDate: string
  travelers: string
  packageType: string
}

const destinationOptions = [
  'Assam',
  'Meghalaya',
  'Arunachal Pradesh',
  'Tawang',
  'Majuli',
  'Kaziranga',
  'Bhutan',
  'Sikkim & Darjeeling',
]

const packageTypes = ['Family', 'Honeymoon', 'Group / Friends', 'Solo', 'Wildlife Safari', 'Adventure']

export default function BookingForm() {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    const msg =
      `Hi Travel Buddy Tours,\n\n` +
      `I'm interested in booking a tour.\n\n` +
      `Destination: ${data.destination || '-'}\n` +
      `Travel Date: ${data.departure || '-'}\n` +
      `Return Date: ${data.returnDate || '-'}\n` +
      `Number of Travelers: ${data.travelers || '-'}\n` +
      `Package Type: ${data.packageType || '-'}\n\n` +
      `Please share package details.`
    window.open(waLink(msg), '_blank')
  }

  const fieldWrap =
    'group flex flex-col gap-1.5'
  const labelCls = 'flex items-center gap-1.5 font-heading text-xs font-semibold text-forest/70'
  const inputCls =
    'w-full rounded-xl border border-forest/10 bg-light-gray/60 px-4 py-3 font-body text-sm text-dark-green outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20'

  return (
    <motion.form
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={handleSubmit(onSubmit)}
      className="glass-light mx-auto w-full max-w-6xl rounded-[2rem] p-6 shadow-luxury sm:p-8"
    >
      <div className="mb-5 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-heading text-xl font-bold text-dark-green sm:text-2xl">
            Plan Your Perfect Trip
          </h3>
          <p className="text-sm text-forest/60">Tell us your details — we’ll WhatsApp you a custom plan.</p>
        </div>
        <span className="eyebrow">Instant Quote</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className={fieldWrap}>
          <label className={labelCls}>
            <MapPin size={13} className="text-primary" /> Destination
          </label>
          <select className={inputCls} {...register('destination')} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {destinationOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>
            <CalendarDays size={13} className="text-primary" /> Departure Date
          </label>
          <input type="date" className={inputCls} {...register('departure')} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>
            <CalendarCheck size={13} className="text-primary" /> Return Date
          </label>
          <input type="date" className={inputCls} {...register('returnDate')} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>
            <Users size={13} className="text-primary" /> Travelers
          </label>
          <input
            type="number"
            min={1}
            placeholder="2"
            className={inputCls}
            {...register('travelers')}
          />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>
            <Compass size={13} className="text-primary" /> Package Type
          </label>
          <select className={inputCls} {...register('packageType')} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {packageTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-dark-green px-8 py-4 font-heading text-base font-semibold text-white transition-all hover:bg-forest hover:shadow-glow sm:w-auto"
      >
        <Search size={18} />
        Check Availability
      </button>
    </motion.form>
  )
}
