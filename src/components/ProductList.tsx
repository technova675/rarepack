import React from 'react'
import ProductItem from './ProductItem'

const products = [
  { alt: 'Chain', images: ['/images/image 14.png', '/images/image 14.png', '/images/image 14.png'] },
  { alt: 'Bracelet', images: ['/images/image 15.png', '/images/image 15.png', '/images/image 15.png'] },
  { alt: 'Ring', images: ['/images/image 18.png', '/images/image 18.png', '/images/image 18.png'] },
]
const ProductList: React.FC = () => (
<div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 px-4 py-4">
    {products.map((p, i) => (
      <ProductItem key={i} images={p.images} alt={p.alt} />
    ))}
  </div>
)

export default ProductList
