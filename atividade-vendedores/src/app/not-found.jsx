import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>🚫 Página não encontrada</h1>
      <p>Oops! A página que você procura não existe.</p>
    </div>
  );
}


