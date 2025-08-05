
import React from 'react'
import CartaoUsuario from "../Card"
import { View } from 'react'
import styles from "./sobre.module.css"
import Link from "next/link"

export default function page() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Pagina Componentes</h1>
        <CartaoUsuario />
        <CartaoUsuario />
        <CartaoUsuario />
        <Link className={styles.button} href="/">Voltar para home</Link>
      </div>
    )
  }
