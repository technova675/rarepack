import React from 'react'
import { motion } from 'framer-motion'

const BannerBackground: React.FC = () => {
  const count = 20
  const items = Array.from({ length: count }).map((_, i) => (
    <div
      key={i}
      className="px-3 py-1 border bg-[#F2F2F2] font-[Inter] font-[700] text-base border-[#373737] text-[#373737] rounded-[4px] whitespace-nowrap"
      style={{ transform: 'rotate(90deg)' }}
    >
      RARE PACKAGE
    </div>
  ))

  // horizontal spans
  const hItems = Array.from({ length: count }).map((_, i) => (
    <span key={i} className="inline-block px-4 bg-[#F2F2F2] font-[Inter] font-[700] text-base border border-[#373737] text-[#373737]  rounded-[4px] whitespace-nowrap">
      RARE PACKAGE
    </span>
  ))

  return (
    <>

      {/* ⬇️ horizontal marquee at the bottom ⬇️ */}
      <motion.div
        className="fixed top-16 -left-5 right-[-5rem] w-[110vw] h-16  bg-[#F2F2F2]  z-50 overflow-hidden -rotate-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
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
        className="
        fixed -top-3 sm:right-[5rem] right-[20rem] h-[110vh] w-16 z-50 overflow-hidden sm:-rotate-10 rotate-10 bg-[#F2F2F2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.5, duration: 0.9 }}
      >
        {/* marquee wrapper */}
        <motion.div
          className="absolute top-0 left-0 w-full flex flex-col items-center gap-32"
          initial={{ y: 0 }}
          animate={{ y: '-50%' }}
          transition={{
            ease: 'linear',
            duration: 50,         // adjust speed here
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

