import { useState } from "react";
import validation from "./validation";

export default function Form({login}) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e){
    e.preventDefault()
    login(userData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>UserName: </label>
      <input
        value={userData.username}
        onChange={handleInputChange}
        type="text"
        name="username"
        placeholder="Escribe tu usuario..."
      />
      {errors.username && <p>{errors.username}</p>}

      <label>Password: </label>
      <input
        value={userData.password}
        onChange={handleInputChange}
        type="password"
        name="password"
        placeholder="Escribe tu contraseña..."
      />
      {errors.password && <p>{errors.password}</p>}

      <button>Login</button>
    </form>
  );
}
