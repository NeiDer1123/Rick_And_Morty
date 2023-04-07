import styles from "../About/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
    <img
      className={styles.img}
      src="https://www.pngplay.com/wp-content/uploads/12/Rick-And-Morty-Wallpaper-Free-PNG.png"
      alt="imagen"
    />
    <div>
      <div className={styles.div}>
        <h2 className={styles.divDescription}>
        <span className={styles.h1}>APLICACIÓN RICK AND MORTY</span>
        <br />
        <br />
          Busca y descrube ¡todos los personajes! de la serie RICK AND MORTY,
          que cuenta las aventuras de Rick Sanchez un "científico
          loco", que al mudarse a casa de su hija decide obligar
          a su nieto Morty a acompañarle a todo tipo de aventuras para que el
          chico se vuelva inteligente como él.
          <br />
          <br />
          Rick y Morty comienzan a vivir aventuras intergalácticas gracias a
          su pistola de portales con la que puede acceder a infinitas
          dimensiones.
        </h2>
      </div>
    </div>
  </div>
  )
}
