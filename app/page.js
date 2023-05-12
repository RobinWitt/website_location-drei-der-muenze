import LandingPageGrid from "./components/LandingPageGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPageGrid />
    </main>
  );
}
