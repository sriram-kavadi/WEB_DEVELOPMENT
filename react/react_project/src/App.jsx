import "./App.css"
import Amazon from "./Amazon"
import Heading from "./Heading"
import Button from "./Button"

function App(){
  return<>
  <Heading></Heading>
  <div className="box">
    <Amazon title="Logitech MX Master" feature1="8000DPI" feature2="5 programable buttons" oldPrice={12495} newPrice={8999}></Amazon>
    <Amazon title="Logitech MX Master" feature1="8000DPI" feature2="5 programable buttons" oldPrice={12495} newPrice={8999}></Amazon>
    <Amazon title="Logitech MX Master" feature1="8000DPI" feature2="5 programable buttons" oldPrice={12495} newPrice={8999}></Amazon>
    <Amazon title="Logitech MX Master" feature1="8000DPI" feature2="5 programable buttons" oldPrice={12495} newPrice={8999}></Amazon>
  </div>
  <Button></Button>
  </>
}

export default App;