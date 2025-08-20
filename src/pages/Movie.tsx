import { useParams } from "react-router-dom";

function Movie() {
     const {name} = useParams();
  return (
   
    <div>
      <h1>Movie Name:</h1>
      <p>{name}</p>
    </div>
  );
}

export default Movie;