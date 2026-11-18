const ProductCard = (props) => {
  return (
    <div style={{
        width:"200px",
        height:"200px",
        border:"1px solid red"
    }}>
      <img
  // width="100px"
  height="100px"
  src={props.imageurl}
  style={{ display: "block", margin: "auto" }}
/>
      <h3 style={{textAlign: "center"}}>Title:{props.productTitle}</h3>
      <p style={{textAlign: "center"}}>Price:{props.productPrice}</p>
    </div>
  )
}

export default ProductCard