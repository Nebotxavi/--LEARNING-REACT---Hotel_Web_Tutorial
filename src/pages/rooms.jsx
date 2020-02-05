import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "../components/banner";
import { Hero } from "../components/hero";
import WithRoomConsumer from "../components/roomContainer";

export const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <WithRoomConsumer />
    </>
  );
};
