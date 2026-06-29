import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials } from '../data/content'

export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={28}
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
      className="!pb-14"
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i} className="h-auto">
          <div className="glass-light flex h-full min-h-[16rem] flex-col rounded-3xl p-7 shadow-soft">
            <Quote size={36} className="text-primary/30" />
            <div className="mt-3 flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-forest/80">“{t.quote}”</p>
            <div className="mt-5 flex items-center gap-3 border-t border-forest/10 pt-5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 font-heading font-bold text-forest">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-dark-green">{t.name}</p>
                <p className="text-xs text-forest/60">{t.location}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
