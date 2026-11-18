import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductCard from './Components/ProductCard'

const App = () => {
  const products=[
    {imageurl:"https://www.apple.com/in/iphone-17/images/overview/product-viewer/initial__dplc9g66mywm_large.jpg",productPrice:8000,productTitle:"iphone"},
    {imageurl:"https://www.apple.com/in/iphone-17/images/overview/product-viewer/initial__dplc9g66mywm_large.jpg",productPrice:8000,productTitle:"iphone"},
    {imageurl:"https://www.apple.com/in/iphone-17/images/overview/product-viewer/initial__dplc9g66mywm_large.jpg",productPrice:8000,productTitle:"iphone"},
    {imageurl:"https://www.apple.com/in/iphone-17/images/overview/product-viewer/initial__dplc9g66mywm_large.jpg",productPrice:8000,productTitle:"iphone"},
  ]
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      justifyContent: "space-between"
    }}>

      <Navbar />

      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px"
      }}>
        {
          products.map((el)=>{
            return <ProductCard imageurl={el.imageurl}
                                productTitle={el.productTitle}
                                productPrice={el.productPrice}
             />
          })
        }

      </div>

      <Footer />

    </div>
  )
}

export default App