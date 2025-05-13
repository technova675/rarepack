import React from 'react'
import { motion } from 'framer-motion'

const BannerBackground: React.FC = () => {
  const count = 20
  const items = Array.from({ length: count }).map((_, i) => (
    <div
      key={i}
      className="px-3 py-1 text-xs font-semibold border bg-white border-gray-300  rounded-sm whitespace-nowrap"
      style={{ transform: 'rotate(90deg)' }}
    >
      RARE PACKAGE
    </div>
  ))

    // horizontal spans
  const hItems = Array.from({ length: count }).map((_, i) => (
    <span key={i} className="inline-block px-4 bg-white text-xs font-semibold border border-gray-300  rounded-sm whitespace-nowrap">
      RARE PACKAGE
    </span>
  ))

  return (
    <>

    {/* ⬇️ horizontal marquee at the bottom ⬇️ */}
      <motion.div
        className="fixed top-16 -left-5 right-[-5rem] w-[110vw] h-12  bg-gray-100  z-50 overflow-hidden -rotate-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.9 }}
      >
        <motion.div
          className="flex items-center h-full gap-4 "
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            ease: 'linear',
            duration: 20,     // tweak speed rzp_test_usEOVyevAd1bv3
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {hItems}
          {hItems.map((child, i) =>
            React.cloneElement(child, { key: `hdup-${i}` })
          )}
        </motion.div>
      </motion.div>

      {/* ⬇️ Vertical marquee at the bottom ⬇️ */}
    <motion.div
      className="fixed -top-3 right-[5rem] h-[110vh] w-12 bg-gray-100 z-50 overflow-hidden -rotate-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.9 }}
    >
      {/* marquee wrapper */}
      <motion.div
        className="absolute top-0 left-0 w-full flex flex-col items-center gap-24"
        initial={{ y: 0 }}
        animate={{ y: '-50%' }}
        transition={{
          ease: 'linear',
          duration: 30,         // adjust speed here
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {/* first batch */}
        {items}
        {/* duplicate batch */}
        {items.map((child, i) =>
          React.cloneElement(child, { key: `dup-${i}` })
        )}
      </motion.div>
    </motion.div>

    
      </>
  )
}

export default BannerBackground

