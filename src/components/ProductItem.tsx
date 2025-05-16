import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus } from "react-icons/fa";

interface Props {
  src: string
  alt: string
}

const ProductItem: React.FC<Props> = ({ src, alt }) => {
  const [quantity, setQuantity] = useState<number>(0)
  const increment = () => setQuantity(q => q + 1)

  return (
    <div>
      {/* Mobile Layout */}
      <div className="md:hidden flex items-center m-2 p-2 ">
        <div className="relative group flex-shrink-0 bg-[#D0D0D0] border border-gray-200 rounded-lg">
          <motion.img
            src={src}
            alt={alt}
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-20 h-20 object-cover opacity-70 cursor-pointer"
          />
          {/* tooltip on tap/hover */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-white border border-gray-200 rounded p-1 text-xs opacity-0 group-hover:opacity-100">
            {alt}
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <motion.div
            key={quantity}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-8 h-8 bg-[#B2B2B2] rounded flex items-center justify-center text-lg font-medium text-white opacity-60"
          >
            {quantity}
          </motion.div>
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
        <motion.div
          className="m-4 w-32 border border-gray-200 rounded-lg overflow-visible"
          initial={{ scale: 1 }}
        >
          <div className="relative group bg-[#D0D0D0]">
            <motion.img
              src={src}
              alt={alt}
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-32 object-cover opacity-70 cursor-pointer"
            />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-white border border-gray-200 rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 z-10">
              <span className="text-sm font-medium text-gray-800">{alt}</span>
            </div>
          </div>
        </motion.div>
        <div className="mt-2 flex items-center justify-end space-x-2 mr-4">
          <motion.div
            key={quantity}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-8 h-8 bg-[#B2B2B2] rounded-md flex items-center justify-center text-2xl font-medium text-white opacity-60"
          >
            {quantity}
          </motion.div>
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
