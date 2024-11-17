
import './WeatherForecast.css';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
      <div className="weather-forecast">
          <h3>{day}</h3>
          <img src={img} alt={imgAlt} />
          <p>Conditions: {conditions}</p>
          <p>Time: {time}</p>
      </div>
  );
};

export default WeatherForecast;
