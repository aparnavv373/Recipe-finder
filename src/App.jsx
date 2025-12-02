import { BrowserRouter, Route, Routes } from "react-router-dom"
import Search from "./Components/Search"
import RecipeDetails from "./Components/RecipeDetails"
function App(){

return(
<div className="relative bg-cover bg-center bg-no-repeat bg-fixed min-h-screen"
style={{
    backgroundImage:"url('background-image.jpeg')" 
  }}>
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10">

        <BrowserRouter>
        <Routes>
    <Route path="/" element={<Search />}/>
    <Route path="/recipe/:id" element={<RecipeDetails/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  
</div>

)
}
export default App