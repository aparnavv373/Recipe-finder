import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { FaSearch } from 'react-icons/fa'; 
function Search() {
    const navigate = useNavigate(); 
    const [input, setInput] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); 
    const[searched,setSearched]=useState(false)
    const handleSearch = async () => {
  if (!input.trim()) return;

  setLoading(true);
  setError("");

  try {
   const url = `/api/getRecipes?query=${encodeURIComponent(input)}`;
;


    const response = await fetch(url);

    
    if (response.status === 402 || response.status === 429) {
      setError("API quota exceeded. Please try again later.");
      setRecipes([]);  
      setLoading(false);
      return;
    }

   
    if (!response.ok) {
      setError("Something went wrong. Please try again.");
      setRecipes([]);
      setLoading(false);
      return;
    }

    const data = await response.json();

    
    setRecipes(data.results || []);
    setSearched(true);

  } catch (err) {
    setError("Network error. Please check your connection.");
  } finally {
    setLoading(false);
  }
};

return (
        <div>
            <div className="flex flex-col h-screen items-center justify-center gap-6 max-w-md mx-auto "> 
                <h1 className="text-white text-5xl">Recipe Finder</h1>
                    <div className="w-full relative"> 
                        <input type="text" value={input} placeholder="Search" className=" rounded-3xl p-2 outline-none bg-white/30 w-full px-5 py-3 shadow-lg " 
                        onChange={(e) => setInput(e.target.value)} 
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}/> 

                        <button onClick={handleSearch} className="p-3 rounded-full absolute right-3 top-1/2 -translate-y-1/2 "> 
                        <FaSearch /> 
                        </button> 
                    </div> 
                    {error && ( <p className="text-red-400 font-medium mt-2">{error}</p> )}
                    {loading && ( <p className="text-white mt-2 animate-pulse">Loading...</p> )}
                    {searched &&!loading &&( recipes.length === 0 ? ( <p className="text-white text-center mt-2 text-lg font-medium">
                        Recipe Not Found</p>
                         ):( 
                         <p className="text-white animate-bounce mt-3">
                            ⬇️ Scroll down to see recipes
                            </p>
                        ))}
            </div>
                    <div className="mt-10 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto "> 
                        {recipes.map(recipe=>(
                            <div key={recipe.id} className="bg-white/40 flex flex-col gap-2 rounded-xl p-4 items-center hover:-translate-y-2 transition duration-200 max-w-xs w-full mx-auto "> 
                                <img src={recipe.image} alt={recipe.title}className="w-full max-w-xs rounded-sm"></img>
                                <h1 className="text-black text-center font-medium">{recipe.title}</h1>
                                <button onClick={()=>navigate(`/recipe/${recipe.id}`)} className="text-white bg-black mt-auto rounded-xl w-32 px-4">View More</button> 
                            </div>
                            ))}
        </div> 
    </div> 
); 
}
export default Search;