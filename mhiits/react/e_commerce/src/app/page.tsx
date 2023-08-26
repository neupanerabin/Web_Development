import Header from "@/components/Header/Header"
import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Footer/Footer"
import ProductCart from "@/components/Products/ProductCart"


export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <ProductCart />
    </div>
  )
}
