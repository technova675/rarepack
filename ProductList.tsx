import React from 'react'
import ProductItem from './ProductItem'

const products = [
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWFr1DPJvyu3Tt79mxN1Co1P9R-H5Em6FKqZciIFpI4P4Ae-d', alt: 'Chain' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGd4OhMlNrarvpVpClKdLSKaH8ICUuC9PAJ5bh2p-Wjr6akXW7', alt: 'Snake' },
  { src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-4GmXnzYal477OxjL6vnru7PQZilUd1fFS-6sbTW6EADCU_EK', alt: 'Ring' },
]

const ProductList: React.FC = () => (
  <div className="flex justify-center flex-wrap">
    {products.map((p, i) => <ProductItem key={i} {...p} />)}
  </div>
)

export default ProductList