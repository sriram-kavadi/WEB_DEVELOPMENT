import "./App.css"
import Title from "./amazonTitle";
import Feature from "./AmazonFeature";
import Price from "./AmazonPrice";
function Amazon({title,feature1,feature2,oldPrice,newPrice}){
    
    return<>
    <div className="div">
        <Title title={title}></Title>
        <Feature feature={feature1}></Feature>
        <Feature feature={feature2}></Feature>
        <div className="smallDiv">
         <Price oldPrice={oldPrice} newPrice={newPrice}></Price>
        </div>
    </div>
    
    </>
}

export default Amazon;