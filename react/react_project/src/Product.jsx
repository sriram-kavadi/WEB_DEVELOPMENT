import Title from "./Title";
import Description from "./description";
function Product({title,price=10}){
    let styles={backgroundColor: "red"};
    let lowprice={backgroundColor:"green"};
    return<>
    <div style={price>=50000? styles:lowprice} >
        <Title title={title} ></Title>
        <Description price={price}></Description>
        {price>=10000? <p>high budget</p>:<p>low budget</p>}
    </div>
    
    </>
}

export default Product;