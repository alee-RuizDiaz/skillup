import React, {useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const navigate = useNavigate();

  const handleSubmit = e => {

        e.preventDefault();

        const email = e.target.email;
        const password = e.target.password;

        const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;


        if (email.value === '' || password.value === '') {
            console.error('Por favor, completa todos los campos.');
            return
        }

        if (email.value !== '' && !emailRegex.test(email.value)) {
            console.error('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if (email === 'challenge@alkemy.org' && password === 'react') {
            console.error('Credenciales incorrectas. Por favor, intenta nuevamente.');
            return;
        }

        axios.post('http://challenge-react.alkemy.org', {
            email: email.value,
            password: password.value
        })
        .then(response => {
            Swal.fire({
              title: "Formulario enviado",
              text: "Ingresaste correctamente",
              icon: "success",
              draggable: true
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/listado');
        })
  }

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/listado');
    }
  }, []);


  return (
    <div className="h-[80vh] flex items-center justify-center bg-gradient-to-tr from-gray-100 to-gray-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl w-full max-w-md px-8 py-10"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Iniciar sesión
        </h2>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
