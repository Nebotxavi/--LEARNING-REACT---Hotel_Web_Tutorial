import React, { useEffect, useState } from "react";
import items from "./data";

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    featuredRooms: [],
    // sortedRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  });
  const [sortedRooms, setSortedRooms] = useState({ sortedRooms: [] });

  useEffect(() => {
    console.log("INTO USE EFFECT (STATE)");
    const rooms = formatData(items);
    const featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    setState(prevState => ({
      ...prevState,
      rooms,
      featuredRooms,
      // sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    }));
    setSortedRooms({ sortedRooms: rooms });

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

  function handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    setState({ ...state, [name]: value }); // tutorial is using a callback to call the function filterooms, but it is not allowed in useState, I should use useEeffect. TBD.
    // filterRooms();
  }

  useEffect(() => {
    function filterRooms() {
      let {
        rooms,
        type,
        capacity,
        price,
        minSize,
        maxSize,
        breakfast,
        pets
      } = state;
      // all the rooms
      let tempRooms = [...rooms];
      // transform values
      capacity = parseInt(capacity);
      price = parseInt(price);
      // filter by type
      if (type !== "all") {
        tempRooms = tempRooms.filter(room => room.type === type);
      }
      // filter by capacity
      if (capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.capacity >= capacity);
      }
      // filter by price
      tempRooms = tempRooms.filter(room => room.price <= price);

      // filter by size
      tempRooms = tempRooms.filter(
        room => room.size >= minSize && room.size <= maxSize
      );

      // filter by breakfast
      if (breakfast) tempRooms = tempRooms.filter(room => room.breakfast);
      // filter by pets
      if (pets) tempRooms = tempRooms.filter(room => room.pets);

      setSortedRooms({ sortedRooms: tempRooms });
    }
    filterRooms();
  }, [state]);

  return (
    <RoomContext.Provider
      value={{ ...state, ...sortedRooms, getRoom, handleChange }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export function WithRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
