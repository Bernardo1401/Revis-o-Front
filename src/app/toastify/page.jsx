"use client";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./toastify.module.css";
import Link from "next/link";

export default function Page() {
    const showSuccess = () => {
        toast.success("✅ Sucesso!");
    };

    const showError = () => {
        toast.error("❌ Erro!");
    };

    const showWarning = () => {
        toast.warn("⚠️ Aviso!");
    };

    const showInfo = () => {
        toast.info("ℹ️ Informação!");
    };

    const showCustom = () => {
        toast("🎉 Obrigado por acessar o site!", {
            style: {
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                fontWeight: "bold",
            },
        });
    };

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>🔔 Teste React Toastify</h1>
            
            <div style={{ 
                display: "flex", 
                gap: "1rem", 
                justifyContent: "center", 
                flexWrap: "wrap",
                marginTop: "2rem" 
            }}>
                <button className={styles.button} onClick={showSuccess}>Success</button>
                <button className={styles.button1} onClick={showError}>Error</button>
                <button className={styles.button2} onClick={showWarning}>Warning</button>
                <button className={styles.button3} onClick={showInfo}>Info</button>
                <button className={styles.button4} onClick={showCustom}>Custom</button>
            </div>

            <ToastContainer />
            <div className={styles.container}>
                <Link className={styles.button} href="/">Voltar para home</Link>
            </div>
            
        </div>
    );
}