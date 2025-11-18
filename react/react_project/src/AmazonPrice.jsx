import "./App.css"

export default function Price({oldPrice,newPrice}){
    let lineStyle={textDecoration:"line-through"}
    return<>
    <span style={lineStyle}>{oldPrice}</span> <span>{newPrice}</span>
    </>
}