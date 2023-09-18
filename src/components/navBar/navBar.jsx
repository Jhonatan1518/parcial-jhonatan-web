import React, { useState } from 'react';
import style from "./styles.module.css";
import Avatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuOpen:", isMenuOpen);
  };

  const handleLogout = () => {
    navigate("/");
    console.log('Sesion Cerrada')
  };

  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        
        <h1 className={style.title}>Panaderia Pan</h1>
        <div className={style.avatarContainer}>
          <div onClick={toggleMenu} className={style.avatar}>
            <img src={Avatar}/>
          </div>
          {isMenuOpen && (
            <div className={style.menu}>
              <button onClick={handleLogout} className={style.menuButton}>
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};