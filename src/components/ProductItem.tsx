import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'; // make sure you're importing the CSS

interface Props {
    src: string
    alt: string
}



const ProductItem: React.FC<Props> = ({ src, alt }) => {
    // Track the quantity of this item
    const [quantity, setQuantity] = useState<number>(0)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Allow only integer values; fallback to 0
        const val = parseInt(e.target.value, 10)
        setQuantity(isNaN(val) ? 0 : val)
    }

    const increment = () => {
        setQuantity(prev => prev + 1)
    }

    return (
        <div>
            <motion.div
                className="m-4 w-32 border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 1 }}
            >
                <a data-tooltip-id="my-tooltip">
                    <motion.img
                        src={src}
                        alt={alt}
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-32 object-cover opacity-10 cursor-pointer"
                    />
                </a>

            </motion.div>
            <div className="flex justify-end items-center mt-2 px-1">
                <input
                    type="number"
                    min="0"
                    value={quantity}
                    onChange={handleInputChange}
                    className="w-16 p-1 border border-gray-300 rounded-md text-center"
                />
                <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={increment}
                    className="ml-2 text-gray-500 text-xl font-bold cursor-pointer"
                >
                    +
                </motion.button>
            </div>
            <Tooltip
                id="my-tooltip"
                className="z-50 p-4 bg-white text-black rounded-xl shadow-lg border border-gray-200 w-60"
            >
                <div>
                    <h3 className="text-base font-semibold">Product Title</h3>
                    <p className="mt-2 text-sm">Detailed information about this product goes here.</p>
                    <ul className="list-disc list-inside mt-2 text-sm">
                        <li>Feature A</li>
                        <li>Feature B</li>
                        <li>Feature C</li>
                    </ul>
                </div>
            </Tooltip>
        </div>


    )
}

export default ProductItem