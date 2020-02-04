import React, { useContext } from "react";

import { RoomContext } from "../context";

export const FeaturedRooms = () => {
  const value = useContext(RoomContext);
  console.log(value);
  return <div>hello from featured rooms {value}</div>;
};
