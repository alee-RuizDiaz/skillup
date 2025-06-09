import { useState, useEffect } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';


const Listado = () => {

  const [moviesList, setMoviesList] = useState([]);

  const navigate = useNavigate();
  let token = null

  useEffect(() => {
    token = localStorage.getItem('token');
    if (token === null) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/movie/popular?api_key=e1df1151ec3e4cbcafb5266c40a5e58e&language=es-ES&page=1'
    axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setMoviesList(apiData.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        Swal.fire({
          title: "Error",
          text: "No se pudieron cargar las películas. Inténtalo más tarde.",
          icon: "error",
          confirmButtonText: "Aceptar"
        });
      });
  }, [setMoviesList]);
  
  return (
    <div className='h-auto p-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {
        moviesList.map((movie, index) => {
          return (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">{movie.title}</h5>
                <p className="text-gray-700 mb-4">{movie.overview.substring(0, 150)}...</p>
                <Link
                  to={`/detalle/${movie.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Ver detalle
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Listado