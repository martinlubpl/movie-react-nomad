import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const p = useParams();
  // console.log(p.id);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${p.id}`)
    ).json();
    console.log(json);
    //json.data.movie
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
