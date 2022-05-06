import Search from "./Search";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Humidity from "./Humidity";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="dark-border">
          <div className="weather-app">
            <div className="row">
              <div className="col">
                <h1 className="display-3" id="city">
                  Orlando
                </h1>
              </div>
              <br />
              <div className="col">
                <Search />
              </div>
            </div>
            <br />
            <h4 className="date-and-time">
              <span className="date">
                Last updated
                <br />
                <span>Date</span>
              </span>
            </h4>

            <br />
            <div className="row">
              <div className="col line">
                <h4 className="weather-description" id="weather-description">
                  Clear skies
                </h4>
                <h3 className="display-5">
                  <img src="" alt="" />
                </h3>
              </div>
              <div className="col line">
                <h2 className="display-1">
                  <Temperature />

                  <span className="measurement">
                    <a href="#" className="active">
                      °C
                    </a>
                    |<a href="#">°F</a>
                  </span>
                </h2>
              </div>
              <div className="col">
                <ul>
                  <li>
                    <span className="words">
                      Wind —
                      <Wind />
                    </span>
                    <span className="words">mph</span>
                  </li>
                  <li>
                    <span className="words">
                      Humidity —
                      <Humidity />%
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="forecast"></div>
            <small>
              <a
                href="https://github.com/RoseGold11/react-weather-app"
                target="blank"
              >
                Open-source code
              </a>
              , by Rachael Moten
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
