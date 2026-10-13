import { motion } from 'motion/react'
import SectionHeading from '../common/SectionHeading'

import weddingVideo1 from '../../assets/FrontVideo/IMG_0470.MP4'
import weddingVideo2 from '../../assets/FrontVideo/2 Without Last Interrrviews MH weds GJ.mp4'

const WEDDING_VIDEOS = [
  {
    id: 1,
    video: weddingVideo1,
  },
  {
    id: 2,
    video: weddingVideo2,
  },
]

export default function FeaturedFilms() {
  return (
    <section className="w-full bg-espresso relative overflow-hidden">

      {/* Heading */}
      <div className="max-w-[1200px] mx-auto px-6 pt-8 lg:pt-12">
        <SectionHeading
          eyebrow="Wedding Films"
          title="Redefining Wedding Films Through Storytelling"
          description="Our wedding films are tailor-made for your big day. We make every film feel personal and earthy, with real emotions, natural sounds and candid moments captured as they unfold."
          light
        />
      </div>

      {/* Videos */}
      <div className="mt-6 w-full">
        {WEDDING_VIDEOS.map((film, index) => (
          <div
            key={film.id}
            className="w-full mb-8"
          >
            {/* Title above second video */}
            {index === 1 && (
              <div className="w-full flex justify-center items-center px-6 py-4">
                <h3 className="font-display text-2xl md:text-4xl text-ivory text-center">
                  Wedding Film 02
                </h3>
              </div>
            )}

            {/* Full-width video */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
<video
  src={film.video}
  controls
  playsInline
  preload="metadata"
  className="block w-full"
  style={{
    width: '100%',
    height: 'auto',
    aspectRatio: '16 / 9',
    objectFit: 'contain',
    display: 'block',
    backgroundColor: '#171310',
  }}
/>

            </motion.div>
          </div>
        ))}
      </div>

    </section>
  )
}
