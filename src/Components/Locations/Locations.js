import React from "react";
import "./LocationsStyle.css";
import { Link } from "react-router-dom";
import { locationList } from "./LocationList";
import indiaFlag from '../../Assets/Flag-India.webp'

const Locations = () => {
  return (
    <section className="locationSection">
      <div className="heading">
        <h1>
          Popular locations in <img src={indiaFlag} alt="flag" /> <span>India</span>{" "}
        </h1>
        <p>
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food, Zomato covers it all. Explore menus, and
          millions of restaurant photos and reviews from users just like you, to
          find your next great meal.
        </p>
      </div>

      <div className="location-card">
        <ul className="location-lists grid">
          {locationList.map((item, index) => {
            return (
              <li className="list-of-locations">
                <Link className="location-name" to="/">
                  {item.locationName}
                </Link>
                <i class="fa fa-chevron-right"></i>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Locations;
