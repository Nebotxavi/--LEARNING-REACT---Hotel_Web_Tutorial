import React from "react";

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  return (
    <RoomContext.Provider value={"hello"}>{children}</RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
