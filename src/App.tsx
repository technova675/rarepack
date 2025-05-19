import './App.css'
import CheckoutButton from './components/CheckoutButton'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import BannerBackground from './components/BannerBackground'

function App() {

  return (
    <>
      <div className="relative min-h-dvh overflow-hidden">
        <BannerBackground />
        <main className="container mx-auto flex flex-col items-center justify-center h-screen">
          <ProductList />
          <CheckoutButton />
        </main>
       
        <Footer />
      </div>
    </>
  )
}

export default App
