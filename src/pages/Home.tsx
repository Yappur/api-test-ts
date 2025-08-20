import { useParams } from "react-router-dom";

function Home() {
     const {name} = useParams();
  return (
   
    <div>
      <h1>Home</h1>
      <p>{name}</p>
    </div>
  );
}

export default Home;