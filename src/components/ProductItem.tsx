import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPlus } from "react-icons/fa"
import { useTransition } from '@react-spring/web'

interface Props {
  images: string[]
  alt: string
}

const ProductItem: React.FC<Props> = ({ images, alt }) => {
  const [quantity, setQuantity] = useState<string | number>('0')
  const [index, setIndex] = useState(0)
  const [hovering, setHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  const increment = () => setQuantity((q: any) => Number(q) + 1)
  const nextImage = () => setIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  const startSlideshow = () => {
    if (window.innerWidth >= 768 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length)
      }, 1000)
    }
  }

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    return () => stopSlideshow()
  }, [])

  return (
    <div>
      {/* Mobile Layout */}
      <div className="md:hidden flex items-center justify-between m-2 px-4 py-2 w-full max-w-[90vw]">
        <div className="relative group flex-shrink-0 bg-[#D0D0D0] border border-[#626262] rounded-lg w-[7rem] h-[7rem] overflow-hidden">
          <motion.div
            className="w-full h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) nextImage()
              else if (info.offset.x > 50) prevImage()
            }}
          >
            {images.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={alt}
                initial={{ opacity: 0, x: i < index ? -50 : 50 }}
                animate={{
                  opacity: i === index ? 1 : 0,
                  x: i === index ? 0 : i < index ? -50 : 50,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`w-full h-[7rem] object-cover absolute inset-0 ${i === index ? 'z-10' : 'z-0'}`}
              />
            ))}
          </motion.div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-white border border-gray-200 rounded p-1 text-xs opacity-0 group-hover:opacity-100 z-10">
            {alt}
          </div>
        </div>

        <div className="flex items-center space-x-3 ml-3 flex-shrink-0">
          <motion.input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => {
              let val = e.target.value.replace(/\D/g, '')
              if (val.length > 1) val = val.replace(/^0+/, '')
              setQuantity(val === '' ? '' : Number(val))
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-8 h-8 bg-[#B2B2B2] rounded-md text-center text-2xl font-medium text-white opacity-60 remove-arrow"
          />
          <motion.button
            onClick={increment}
            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-xl bg-[#EEEEEE]"
          >
            <FaPlus />
          </motion.button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
       

        <div className="relative m-4 w-[11.6rem] cursor-pointer">
          {/* Tooltip outside overflow-hidden */}
          {hovering && (
            <div className="absolute bottom-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-max bg-[#fff] border border-gray-300 rounded-lg px-3 py-1  z-50">
              <span className="text-sm font-medium text-[#A1A1A1]">{alt}</span>
            </div>
          )}

          <motion.div
            className="w-full border border-[#D0D0D0] rounded-lg overflow-hidden"
            onMouseEnter={() => {
              setHovering(true)
              startSlideshow()
            }}
            onMouseLeave={() => {
              setHovering(false)
              stopSlideshow()
            }}
          >
            <div className="relative bg-[#D0D0D0] w-full h-[11.6rem]">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  width: `${images.length * 100}%`,
                  transform: `translateX(-${index * (100 / images.length)}%)`,
                }}
              >
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={alt}
                    className="w-full h-[11.6rem] object-cover"
                    style={{ width: `${100 / images.length}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>


        <div className="mt-2 flex items-center justify-end space-x-2 mr-4">
          <motion.input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => {
              let val = e.target.value.replace(/\D/g, '')
              if (val.length > 1) val = val.replace(/^0+/, '')
              setQuantity(val === '' ? '' : Number(val))
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-8 h-8 bg-[#B2B2B2] rounded-md text-center text-2xl font-medium text-white opacity-60 remove-arrow"
          />
          <motion.button
            onClick={increment}
            className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center text-xl bg-[#EEEEEE]"
          >
            <FaPlus />
          </motion.button>
        </div>
      </div>

    </div>
  )
}

export default ProductItem


// import React, { useState, useEffect, useRef } from 'react'
// import { motion } from 'framer-motion'
// import { FaPlus } from "react-icons/fa"

// interface Props {
//   images: string[]
//   alt: string
// }

// const ProductItem: React.FC<Props> = ({ images, alt }) => {
//   const [quantity, setQuantity] = useState<string | number>('0')
//   const [index, setIndex] = useState(0)
//   const [hovering, setHovering] = useState(false)
//   const intervalRef = useRef<NodeJS.Timeout | null>(null)

//   const increment = () => setQuantity((q: any) => Number(q) + 1)
//   const nextImage = () => setIndex((prev) => (prev + 1) % images.length)
//   const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

//   const startSlideshow = () => {
//     if (window.innerWidth >= 768 && !intervalRef.current) {
//       intervalRef.current = setInterval(() => {
//         setIndex((prev) => (prev + 1) % images.length)
//       }, 10000)
//     }
//   }

//   const stopSlideshow = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//       intervalRef.current = null
//     }
//   }

//   useEffect(() => {
//     return () => stopSlideshow()
//   }, [])

//   return (
//     <div>
//       {/* Mobile Layout */}
//       <div className="md:hidden flex items-center justify-between m-2 px-4 py-2 w-full max-w-[90vw]">
//         <div className="relative group flex-shrink-0 bg-[#D0D0D0] border border-[#626262] rounded-lg w-[7rem] h-[7rem] overflow-hidden">
//           <motion.div
//             className="w-full h-full"
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={(_, info) => {
//               if (info.offset.x < -50) nextImage()
//               else if (info.offset.x > 50) prevImage()
//             }}
//           >
//             {images.map((src, i) => (
//               <motion.img
//                 key={i}
//                 src={src}
//                 alt={alt}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: i === index ? 1 : 0 }}
//                 transition={{ duration: 0.5 }}
//                 className={`w-full h-[7rem] object-cover absolute inset-0 ${i === index ? 'z-10' : 'z-0'}`}
//               />
//             ))}
//           </motion.div>

//           {/* Tooltip */}
//           <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-white border border-gray-200 rounded p-1 text-xs opacity-0 group-hover:opacity-100 z-10">
//             {alt}
//           </div>
//         </div>

//         <div className="flex items-center space-x-3 ml-3 flex-shrink-0">
//           <motion.input
//             type="number"
//             min="1"
//             value={quantity}
//             onChange={(e) => {
//               let val = e.target.value.replace(/\D/g, '')
//               if (val.length > 1) val = val.replace(/^0+/, '')
//               setQuantity(val === '' ? '' : Number(val))
//             }}
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             className="w-8 h-8 bg-[#B2B2B2] rounded-md text-center text-2xl font-medium text-white opacity-60 remove-arrow"
//           />
//           <motion.button
//             onClick={increment}
//             className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-xl bg-[#EEEEEE]"
//           >
//             <FaPlus />
//           </motion.button>
//         </div>
//       </div>

//       {/* Desktop Layout */}
//       <div className="hidden md:block">
//         <motion.div
//           className="m-4 w-[11.6rem] border border-[#D0D0D0] rounded-lg overflow-hidden cursor-pointer"
//           onMouseEnter={() => {
           
//             startSlideshow()
//           }}
//           onMouseLeave={() => {
//             setHovering(false)
//             stopSlideshow()
//           }}
//         >
//           <div className="relative bg-[#D0D0D0] w-full h-[11.6rem] overflow-hidden">
//             {/* {images.map((src, i) => (
//               <motion.img
//                 key={i}
//                 src={src}
//                 alt={alt}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: i === index ? 1 : 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//               />
//             ))} */}

//             {images.map((src, i) => (
//               <motion.img
//                 key={`${i}-${index}`} // <-- Key changes every cycle
//                 src={src}
//                 alt={alt}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: i === index ? 1 : 0 }}
//                 transition={{ duration: 10 }}
//                 className={`absolute top-0 left-0 w-full h-full object-cover bg-[#D0D0D0]`}
//               />
//             ))}

//             {/* Tooltip */}
//             {hovering && (
//               <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#D0D0D0] border border-gray-200 rounded-lg p-2 shadow-md z-10">
//                 <span className="text-sm font-medium text-[#A1A1A1]">{alt}</span>
//               </div>
//             )}
//           </div>
//         </motion.div>

//         <div className="mt-2 flex items-center justify-end space-x-2 mr-4">
//           <motion.input
//             type="number"
//             min="1"
//             value={quantity}
//             onChange={(e) => {
//               let val = e.target.value.replace(/\D/g, '')
//               if (val.length > 1) val = val.replace(/^0+/, '')
//               setQuantity(val === '' ? '' : Number(val))
//             }}
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             className="w-8 h-8 bg-[#B2B2B2] rounded-md text-center text-2xl font-medium text-white opacity-60 remove-arrow"
//           />
//           <motion.button
//             onClick={increment}
//             className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center text-xl bg-[#EEEEEE]"
//           >
//             <FaPlus />
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductItem
