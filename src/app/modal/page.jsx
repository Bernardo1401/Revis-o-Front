"use client";
import { useState } from "react";
import styles from "./modal.module.css";
import Link from "next/link";

export default function ModalExample() {
    const [show, setShow] = useState(false);

    return (
        <>
        <div className={styles.overlay}>
            <h1 className={styles.title1}>Exemplo de Modal</h1>
            <p className={styles.description1}>Clique no botão abaixo para abrir o modal.</p>
            <button className={styles.button} onClick={() => setShow(true)}>
                Abrir Modal
            </button>
            {show && (
                <div className={styles.overlay} onClick={() => setShow(false)}>
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className={styles.title}>Modal</h2>
                        <p className={styles.content}>Conteúdo do modal aqui.</p>
                        <button className={styles.closeButton} onClick={() => setShow(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
            <div className={styles.container}>
                <Link className={styles.button} href="/">Voltar para home</Link>
            </div>
            </div>
        </>
    );
}