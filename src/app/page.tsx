"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { TituloClases, TituloFuncion } from "./components/Titulo";
import { Cards, CardsImage } from "./components/Cards";

export default function Home() {
  return (
    <main>
      <section className={styles.mainBosque}>
        <header className={styles.headerMain}>
          <div>
            <Image
              src="/assets/LogoGalexy.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.containerTitleMain}>
            <h1 className={styles.titleMainWhite}>G</h1>
            <h1 className={styles.titleMain}>ALEX</h1>
            <h1 className={styles.titleMainWhite}>Y</h1>
          </div>

          <TituloFuncion>
            ❝ La mejor galería de imagenes que podrás encontrar ❞
          </TituloFuncion>
        </header>
        <div className={styles.containerSection}>
          <Cards
            titulo="¿Que es Galexy?"
            descripcion="Galexy es una galería de imagenes con editor de imagenes integrado apoyado con inteligencia artificial impulsada con GPT-5"
          />
          <Cards
            titulo="¿Porqué Galexy?"
            descripcion="Galexy te permite tener unificado todas las imagenes de todas tus redes sociales asociadas con Meta en un solo lugar"
          />
          <Cards
            titulo="¿Donde usar Galexy?"
            descripcion="Galexy está disponible en todas las plataformas, ya sea en tu computadora, tablet o celular"
          />
        </div>
      </section>
      <header className={styles.headerDivider}>
        <TituloClases>Manten la máxima resolución posible</TituloClases>
      </header>
      <section className={styles.mainMiles}>
        <div className={styles.sectionExtra}>
          <CardsImage
            titulo="Paisajes"
            url="bosqueDia.jpeg"
            footer="Tendras todas las imagenes de los paisajes que tanto disfrutaste"
          />
          <CardsImage
            titulo="Amigos"
            url="amigosCalle.jpg"
            footer="Podras volver a ver a tus amigos y familiares sin buscar en todos lados"
          />
        </div>
      </section>
    </main>
  );
}
