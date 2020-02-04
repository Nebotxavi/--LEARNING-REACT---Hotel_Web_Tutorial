import React from "react";

export const Hero = ({ children, hero = "defaultHero" }) => {
  console.log("children", children);
  return <header className={hero}>{children}</header>;
};
