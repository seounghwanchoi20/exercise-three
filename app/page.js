import WeatherCard from "./components/WeatherCard"
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>Weather app</h1>
       <WeatherCard city="Beijing" currentTemp="73" highTemp="100" lowTemp="1"/>
       </main>
       </div>
  );
}
