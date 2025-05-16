import React from 'react'
import ProductItem from './ProductItem'

const products = [
  { src: 'src/assets/images/chain.png', alt: 'Chain' },
  { src: 'src/assets/images/bracelet.png', alt: 'Bracelet' },
  { src: 'src/assets/images/ring.png', alt: 'Ring' },
]

const ProductList: React.FC = () => (
  <div className="flex justify-center flex-wrap">
    {products.map((p, i) => <ProductItem key={i} {...p} />)}
  </div>
)

export default ProductList
