import "./MovieList.css";

function MovieList() {

  const movies = [
    { id: 1, title: "인셉션", genre: "SF", rating: 9.0, photo: "inception.jpeg"},
    { id: 2, title: "기생충", genre: "드라마", rating: 9.5, photo: "gisaengchung.jpeg"},
    { id: 3, title: "인터스텔라", genre: "SF", rating: 9.2, photo: "interstellar.jpeg"},
    { id: 4, title: "올드보이", genre: "드라마", rating: 8.8, photo: "oldboy.jpeg"},
    { id: 5, title: "매트릭스", genre: "SF", rating: 8.9, photo: "matrix.jpeg"}
  ];

  return (
    <div className="main-container">
      {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
    </div>
  );
  
}

function MovieCard({movie}) {
  return (
    <div className='card-container'>
      <div> 제목 : {movie.title} </div>
      <div> 장르 : {movie.genre} </div>
      <div> 평점 : {movie.rating}{movie.rating>=9 && ' 🏆'} </div>
    </div>
  )
}
export default MovieList;
