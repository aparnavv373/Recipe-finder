import { useState ,useEffect} from "react"; 
import { useParams,useNavigate } from "react-router-dom"; 
function RecipeDetails(){
     const navigate = useNavigate();
      const{id}=useParams(); 
      const[details,setDetails]=useState(null)
 useEffect(() => {
  const fetchDetails = async () => {
    try {
        const url = `/.netlify/functions/getRecipeDetails?id=${id}`;
        const response = await fetch(url);


      
      if (response.status === 402 || response.status === 429) {
        setDetails({ error: "API quota exceeded. Try again later." });
        return;
      }

      
      if (!response.ok) {
        setDetails({ error: "Failed to load recipe details." });
        return;
      }

      const data = await response.json();
      setDetails(data);

    } catch (err) {
      setDetails({ error: "Network error. Please try again." });
    }
  };

  fetchDetails();
}, [id]);

if (!details) return <p className="text-white text-center mt-10">Loading...</p>;
return( 
       <div className="pt-16 pb-10"> 
        <div className="text-white max-w-3xl w-full space-y-6 mx-auto bg-white/20 backdrop-blur-md rounded-xl p-6 ">
          <h1 className="text-center text-3xl">{details.title}</h1>
          <img src={details.image} alt={details.title} className="w-64 mx-auto rounded-xl shadow-xl"/>
          <div>
             <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2> 
             <ul className="list-disc list-inside"> 
                {details.extendedIngredients?.map((ingredient)=>( 
                    <li key={ingredient.id}>
                         {ingredient.name} 
                    </li>
                ))}
                </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions:</h2>
                {details.instructions?(
                    <p className="whitespace-pre-line">{details.instructions}</p>
                    ):( <p> No instructions Available</p> 

                    ) }
                    </div> 
                    <button onClick={() => navigate(-1)} className="bg-black text-white px-4 py-2 rounded mt-4" >
                         Back 
                    </button> 
        </div> 
    </div> 
    ) 
}
export default RecipeDetails