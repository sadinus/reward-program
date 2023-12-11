import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  return (
    <div className={styles.errorContainer} data-testid="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but it seems like there was an error.</p>
      <p>Please try again later or contact support.</p>
    </div>
  );
}
