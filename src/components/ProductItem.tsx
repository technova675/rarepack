import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { FaPlus } from "react-icons/fa";

interface Props {
  src: string
  alt: string
}

const ProductItem: React.FC<Props> = ({ src, alt }) => {
  const [quantity, setQuantity] = useState<number>(0)

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const val = parseInt(e.target.value, 10)
//     setQuantity(isNaN(val) ? 0 : val)
//   }

  const increment = () => {
    setQuantity(prev => prev + 1)
  }

  return (
    <div>
      <motion.div
        className="m-4 w-32 border border-gray-200 rounded-lg overflow-visible" // allow tooltip to overflow
        initial={{ scale: 1 }}
      >
        {/* Tooltip wrapper */}
        <div className="relative group bg-[#D0D0D0]">
          <motion.img
            src={src}
            alt={alt}
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-32 object-cover opacity-70 cursor-pointer bg-[#D0D0D0]"
          />
          {/* Tooltip Card */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-white border border-gray-200 rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <span className="text-sm font-medium text-gray-800">{alt}</span>
          </div>
        </div>
      </motion.div>
      {/* bottom controls */}
      <div className="mt-2 flex items-center justify-end space-x-2 mr-4">
        {/* quantity display */}
        <motion.div
          key={quantity}               // animate on change
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-8 h-8 bg-[#B2B2B2] rounded-md flex items-center opacity-60 justify-center text-2xl font-medium text-[#ffffff]"
        >
          {quantity}
        </motion.div>

        {/* + button */}
        <motion.button
          onClick={increment}
          className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center text-xl text-[#000000] bg-[#EEEEEE]"
        >
          <FaPlus />
        </motion.button>
      </div>
    </div>
  )
}

export default ProductItem
