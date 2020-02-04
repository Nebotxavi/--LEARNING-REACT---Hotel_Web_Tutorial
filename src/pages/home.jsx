import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Banner } from "../components/banner";
import { FeaturedRooms } from "../components/featuredRooms";
import { Hero } from "../components/hero";
import { Services } from "../components/services";

export const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner title="Rural rooms" subtitle="deluxe rooms starting at $199">
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </Fragment>
  );
};
