import React from 'react'
import ProductItem from './ProductItem'

const products = [
  { alt: 'Chain', images: ['/images/chain.png', '/images/chain.png', '/images/chain.png'] },
  { alt: 'Bracelet', images: ['/images/bracelet.png', '/images/bracelet.png', '/images/bracelet.png'] },
  { alt: 'Ring', images: ['/images/ring.png', '/images/ring.png', '/images/ring.png'] },
]
const ProductList: React.FC = () => (
<div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 px-4 py-4">
    {products.map((p, i) => (
      <ProductItem key={i} images={p.images} alt={p.alt} />
    ))}
  </div>
)

export default ProductList
