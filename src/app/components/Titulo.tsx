"use client";

import React from "react";
import styles from "../page.module.css";

// Como se declararia un componente funcional
/* 
    Se declara un interface para definir los tipos de las
    props que se le pasaran al componente
    (Se suele usar solo en typescript)
*/

interface Props {
  children: React.ReactNode;
}

export const TituloFuncion = ({ children }: Props) => {
  return <h1 className={styles.tituloFuncion}>{children}</h1>;
};

// Como se declararia un componente de clase

export class TituloClases extends React.Component<Props> {
  // Se declara el constructor para inicializar el estado
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <h1 className="tituloClass">{this.props.children}</h1>;
  }
}
