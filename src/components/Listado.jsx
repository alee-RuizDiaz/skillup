import { useEffect } from 'react'
import {useNavigate, Link} from 'react-router-dom'


const Listado = () => {

  const navigate = useNavigate();
  let token = null

  useEffect(() => {
    token = localStorage.getItem('token');
    if (token === null) {
      navigate('/');
    }
  }, []);
  
  return (
    <div className='h-[80vh] p-[50px]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Imagen"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">Titulo</h5>
            <p className="text-gray-700 mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listado