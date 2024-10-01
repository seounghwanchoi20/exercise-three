export default function WeatherCard({city, currentTemp, highTemp, lowTemp}) {
    return (
    <div>
        <h2>{city}</h2>
        <p>Current Temperature : {currentTemp} </p>
        <p>High Temperature : {highTemp} </p>
        <p>Low Temperature : {lowTemp} </p>
    </div>
    );
}