"use client";
import React, { useState } from "react";
import CardProps from "../CardProps";
import styles from "./props.module.css";
import Link from "next/link";

export default function Home() {
  const [pessoas, setPessoas] = useState([
    { nome: "Marcello", email: "map@gmail.com", idade: 89 },
    { nome: "Thiago" },
    {},
    { nome: "Bernardo", email: ""},
    { nome: "João", email: "joao@gmail.com", idade: "" }
  ]);

  return (
    <div className={styles.container}>
      {pessoas.map((pessoa, index) => (
        <div className={styles.card} key={index}>
          <CardProps
            nome={pessoa.nome}
            email={pessoa.email}
            idade={pessoa.idade}
          />
        </div>
      ))}
              <Link className={styles.button} href="/">Voltar para home</Link>
    </div>
  );
}