import react, {useState ,useEffect} from "react"
import "./app.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard"


//a062244e
const API_key = "https://www.omdbapi.com?apikey=a062244e"
const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
const App=() =>{

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovie = async (title)=>{
    const response = await fetch(`${API_key}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)

    
  
  }
  useEffect(()=>{
    searchMovie("batman");
  }, [])

  return (
    <div className="app" >
      <h1>Movie Land</h1>

      <div className="search" >
        <input
        placeholder="Search Movie" 
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
<img
src={SearchIcon}
alt="search"
onClick={()=>searchMovie(searchTerm)}
/>
      </div>
      { movies.length>0 ? (
      <div className="container" >
        {movies.map((movie)=>(
          <MovieCard movie={movie} />
        ))}
      </div>
      ) : (
        <div className="empty" >
          <h2>No movies found</h2>

        </div>
      )
      }
      

    </div>
  );
}

export default App;
