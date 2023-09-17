import { url } from "inspector";
import styles from "../page.module.css";
import { TituloClases } from "./Titulo";
import Image from "next/image";

interface PropsCards {
  titulo: string;
  descripcion: string;
}

export function Cards({ titulo, descripcion }: PropsCards) {
  return (
    <div className={styles.card}>
      <div className={styles.divTitleSection}>
        <TituloClases>{titulo}</TituloClases>
      </div>
      <div className={styles.description}>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

interface PropsCardsImage {
  titulo: string;
  url: string;
  footer?: string;
}
export function CardsImage({ titulo, url, footer }: PropsCardsImage) {
  return (
    <div className={styles.containerCardImage}>
      <Image
        src={"/assets/" + url}
        alt="Jeje"
        width={420}
        height={300}
        className={styles.cardImage}
      />
      <div className={styles.divTitleSection}>
        <TituloClases>{titulo}</TituloClases>
      </div>
      <footer>{footer}</footer>
    </div>
  );
}
