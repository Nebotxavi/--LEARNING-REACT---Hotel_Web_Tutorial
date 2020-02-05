import React, { useEffect, useState } from "react";
import items from "./data";

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loading: true
  });

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter(room => room.featured === true);
    setState({ rooms, featuredRooms, sortedRooms: rooms, loading: false });

    function formatData(items) {
      return items.map(item => {
        const id = item.sys.id;
        const images = item.fields.images.map(image => image.fields.file.url);
        return { ...item.fields, images, id };
      });
    }
  }, []);

  function getRoom(slug) {
    let tempRooms = [...state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  }

  return (
    <RoomContext.Provider value={{ ...state, getRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
