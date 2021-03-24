import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext); //El dispatch viene del HeroesApp, es el 'action' que se le manda al authReducer

  const handleLogin = () => {
    // history.push('/')
    const lastPath = localStorage.getItem("lastPath") || "/";

    dispatch({
      type: types.login,
      payload: {
        name: "Renzo",
      },
    });

    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-outline-primary" onClick={handleLogin}>
        Ingresar
      </button>
    </div>
  );
};
