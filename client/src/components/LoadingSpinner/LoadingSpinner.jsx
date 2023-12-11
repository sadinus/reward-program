import styles from "./LoadingSpinner.module.css";

export function LoadingSpinner() {
  return (
    <div className={styles.background} data-testid="loading-spinner">
      <div className={styles.loader}></div>
    </div>
  );
}
