import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card, { Colors } from "./components/Card/Index";
import iconSedans from "../src/assets/icon-sedans.svg";
import iconSuvs from "../src/assets/icon-suvs.svg";
import iconLuxury from "../src/assets/icon-luxury.svg";

function App() {
  return (
    <main>
      <div className="wrapper">
        <div className="container">
          <div className="row mx-3 my-5">
            <Card
              iconCar={iconSedans}
              alt="icon-sedan-car"
              category="SEDANS"
              description="Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip."
              style={Colors.brightOrange}
            />
            <Card
              iconCar={iconSuvs}
              alt="icon-suv-car"
              category="SUVS"
              description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
              style={Colors.darkCyan}
            />
            <Card
              iconCar={iconLuxury}
              alt="icon-luxury-car"
              category="LUXURY"
              description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
              style={Colors.veryDarkCyan}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
