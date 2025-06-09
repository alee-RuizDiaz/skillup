import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';


const Detalle = () => {
    const [movieDetails, setMovieDetails] = useState({});

    const navigate = useNavigate();
    let token = null

    const { movieID } = useParams();
    
    useEffect(() => {
        token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=e1df1151ec3e4cbcafb5266c40a5e58e&language=es-ES`;
        axios.get(endPoint)
            .then(response => {
                const movieDetails = response.data;
                setMovieDetails(movieDetails);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
                Swal.fire({
                    title: "Error",
                    text: "No se pudieron cargar los detalles de la película. Inténtalo más tarde.",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                });
            });
    }, [movieID]);

  return (
    <>
    {!movieDetails && <p>Cargando...</p>}
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 max-w-[600px] mx-auto mt-10">
        <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
        className="w-full h-[400px] object-cover"
        />
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{movieDetails.title}</h2>
            <p className="text-gray-700 mb-4">{movieDetails.overview}</p>
            <p className="text-gray-700 mb-2">
                <strong>Fecha de lanzamiento:</strong> {movieDetails.release_date}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Calificación:</strong> {movieDetails.vote_average}
            </p>
            <p className="text-gray-700">
                <strong>Géneros:</strong>{' '}
                {movieDetails.genres?.map(genre => genre.name).join(', ')}
            </p>
        </div>
    </div>
    </>
  )
}

export default Detalle