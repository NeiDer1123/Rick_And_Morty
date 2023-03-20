import { useState } from "react";
import validation from "./validation";
import styles from "../Form/Form.module.css";

export default function Form({ login }) {
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

  function handleSubmit(e) {
    e.preventDefault();
    login(userData);
  }

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.labels}>UserName: </label>
        <input
          className={styles.inputs}
          value={userData.username}
          onChange={handleInputChange}
          type="text"
          name="username"
          placeholder="Escribe tu usuario..."
        />
        {errors.username && <p className={styles.p}>{errors.username}</p>}

        <label className={styles.labels}>Password: </label>
        <input
          className={styles.inputs}
          value={userData.password}
          onChange={handleInputChange}
          type="password"
          name="password"
          placeholder="Escribe tu contraseña..."
        />
        {errors.password && <p className={styles.p}>{errors.password}</p>}

        <div>
          <button className={styles.login}>Login</button>
        </div>
      </form>
    </div>
  );
}
