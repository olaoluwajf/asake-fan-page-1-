import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  'https://cdn.pmnewsnigeria.com/wp-content/uploads/2023/12/Asake-1200x628-1-1424x802-1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkqee9lgEISMoJJJ3xxQuLk_qVyO7x_51fpUFyZ58BTtd23GW3259LUFE&s=10',
  'https://i.guim.co.uk/img/media/7938be04c571917a8d8fe832db908ccc7db737fb/893_1136_1658_995/master/1658.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7b68fe77013ef074296fe06748b9e695',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DB3EXJUfQhF6PW38inFpTZXa2RvMih7Pv_h4SCKKq_vDgNGjMrRBAhKI&s=10',
  'https://notjustok.com/wp-content/uploads/2026/05/Asake.jpg',
  'https://blueprint.ng/wp-content/uploads/2024/08/Asake.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_uRywv4-66PSvG4LTYXaKOYjDtOteWmp5-NolLmvI5FRVMoJ7-B6Pm4&s=10',
  'https://i0.wp.com/thenollywoodreporter.com/wp-content/uploads/2025/08/Asake-e1754298623681.webp',
]

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null)

  const close = () => setIndex(null)
  const next = () => setIndex((i) => (i === null ? null : (i + 1) % images.length))
  const prev = () => setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))

  return (
    <>
      <div className="columns-2 md:columns-3 gap-3 md:gap-4 [column-fill:_balance]">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setIndex(i)}
            className="mb-3 md:mb-4 block w-full break-inside-avoid overflow-hidden"
          >
            <img
              src={src}
              alt={`Asake fan gallery photo ${i + 1}`}
              loading="lazy"
              className="w-full grayscale hover:grayscale-[40%] transition-all duration-500 ease-editorial"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10"
            onClick={close}
          >
            <button aria-label="Close" className="absolute top-6 right-6 text-paper" onClick={close}>
              <X size={26} />
            </button>
            <button
              aria-label="Previous"
              className="absolute left-3 md:left-8 text-paper/70 hover:text-paper"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
            >
              <ChevronLeft size={30} />
            </button>
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              src={images[index]}
              alt={`Asake fan gallery photo ${index + 1}, enlarged`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[92vw] object-contain"
            />
            <button
              aria-label="Next"
              className="absolute right-3 md:right-8 text-paper/70 hover:text-paper"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
            >
              <ChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
