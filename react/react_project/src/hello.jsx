function hello({username,color}){
    let sty={backgroundColor:color};
    return <>
    <div style={sty}>
        <h1>hello! {username}</h1>
    </div>
    </>
}

export default hello;