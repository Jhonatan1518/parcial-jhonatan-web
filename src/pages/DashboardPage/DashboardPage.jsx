import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from "./style.module.css";
import { NavBar } from '../../components/navBar/navBar';

export const DashboardPage = () => {
  const [datos, setDatos] = useState([]);
  const token = localStorage.getItem('token');
  console.log(token+"TOKEN")
  useEffect(() => {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios.get('http://89.116.25.43:3500/api/productos/listar', config)
      .then((response) => {
        console.log('Datos recibidos de la API:', response.data);
        setDatos(response.data.result);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);


  return (
   <div>
    <NavBar/>
    <div className={style.main}>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(datos) && datos.length > 0 ? (
            datos.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.imagen} alt={item.descripcion} width="100" height="100" />
                </td>
                <td>{item.descripcion}</td>
                <td>${item.valor}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No se encontraron datos</td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
    </div>
  )
}

