import React from 'react'
import { motion } from 'framer-motion'


const BannerBackground: React.FC = () => {
  const count = 20
  const items = Array.from({ length: count }).map((_, i) => (
   <span
  key={i}
   className="px-3 py-1 font-bold text-lg rounded-[4px] whitespace-nowrap rotate-90 font-jetbrains leading-none tracking-[-0.06em] [word-spacing:0.5rem]  bg-[#F2F2F2] text-[#373737] border border-[#373737]"
>
  RARE PACKAGE
</span>
  ))
  
  // horizontal spans
  const hItems = Array.from({ length: count }).map((_, i) => (
    <span key={i} className="inline-block px-4 bg-[#F2F2F2] font-jetbrains text-xl leading-none tracking-[-0.06em] [word-spacing:0.8rem] border border-[#373737] text-[#373737]  rounded-[4px] whitespace-nowrap">
      RARE PACKAGE
    </span>
  ))

  return (
    <>

      {/* ⬇️ horizontal marquee at the bottom ⬇️ */}
      <motion.div
        className="fixed sm:top-20 top-12 -left-5 right-[-5rem] w-[110vw] h-12 lg:h-16  bg-[#F2F2F2]  z-50 overflow-hidden sm:-rotate-3 rotate-3"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.2, duration: 0.1 }}
      >
        <motion.div
          className="flex items-center h-full gap-4 "
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
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
        fixed -top-3 sm:right-[5rem] right-[21rem] lg:left-auto  -left-3 lg:right-[8rem] h-[110vh] lg:w-16 w-12 z-50 overflow-hidden sm:-rotate-10 rotate-6 bg-[#F2F2F2]"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* marquee wrapper */}
        <motion.div
          className="flex flex-col justify-center items-center gap-34"
          initial={{ y: '-50%'  }}
          animate={{ y: 0}}
          transition={{
            ease: 'linear',
            duration: 30,         // adjust speed here
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
            
          {/* {items}
        
          {items.map((child, i) =>
            React.cloneElement(child, { key: `dup-${i}` })
          )} */}
          {[...items, ...items.map((child, i) =>
      React.cloneElement(child, { key: `dup-${i}` })
    )]}
        </motion.div>
      </motion.div>


    </>
  )
}

export default BannerBackground

