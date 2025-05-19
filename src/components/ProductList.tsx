import React from 'react'
import ProductItem from './ProductItem'

const products = [
  { src: '/images/chain.png',    alt: 'Chain'    },
  { src: '/images/bracelet.png', alt: 'Bracelet' },
  { src: '/images/ring.png',     alt: 'Ring'     },
]

const ProductList: React.FC = () => (
  <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 px-4 py-4">
    {products.map((p, i) => <ProductItem key={i} {...p} />)}
  </div>
)

export default ProductList
