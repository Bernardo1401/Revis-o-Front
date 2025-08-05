import styles from "./page.module.css";
import Link from "next/link";

export default function MinhaPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>
                Olá, meu nome é bernardo
            </h1>
            <p className={styles.texto}>
                Bem-vindo!
            </p>
            <Link href="/" className={styles.link}>
                Volte para a página inicial
            </Link> ma
        </div>
    );
}