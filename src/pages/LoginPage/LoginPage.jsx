import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import style from "./style.module.css";

export const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      usuario: usuario,
      password: password,
    };

    await axios
      .post("http://89.116.25.43:3500/api/login", data)
      .then((resp) => {
       
        localStorage.setItem("token", resp.data.jwt);
        localStorage.setItem("user", resp.data.user);
        localStorage.setItem("username", resp.data.user.usuario);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400 || err.response.status == 404) {
          Swal.fire("Lo siento", err.response.data.message, "error");
        } else {
          Swal.fire("Lo siento", "Ha ocurrido un error", "error");
        }
      });
  };

  return (
    <div className={style.main}>
      <div className={style.cardMain}>
        <div className={style.cardInfo}>
          <form>
            <div className={style.cardform}>
              <h1>Panaderia Pan</h1>
              <div className={style.inputUser}>
                <input
                  className={style.inputs}
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsuario(e.target.value);
                  }}
                />
              </div>
              <div className={style.inputPass}>
                <input
                  className={style.inputs}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPasword(e.target.value);
                  }}
                />
              </div>
              <button className={style.btn} onClick={handleLogin}>
                Iniciar Sesion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
