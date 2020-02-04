import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import { Title } from "./title";

export const Services = () => {
  const services = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, voluptatem dignissimos! Repudiandae veniam assumenda minima dignissimos molestias porro, pariatur enim doloremque eveniet, laudantium ipsa ipsum itaque fugiat! Debitis, expedita suscipit."
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, voluptatem dignissimos! Repudiandae veniam assumenda minima dignissimos molestias porro, pariatur enim doloremque eveniet, laudantium ipsa ipsum itaque fugiat! Debitis, expedita suscipit."
    },
    {
      icon: <FaShuttleVan />,
      title: "Free shuttle",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, voluptatem dignissimos! Repudiandae veniam assumenda minima dignissimos molestias porro, pariatur enim doloremque eveniet, laudantium ipsa ipsum itaque fugiat! Debitis, expedita suscipit."
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, voluptatem dignissimos! Repudiandae veniam assumenda minima dignissimos molestias porro, pariatur enim doloremque eveniet, laudantium ipsa ipsum itaque fugiat! Debitis, expedita suscipit."
    }
  ];

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <h6>{item.info}</h6>
            </article>
          );
        })}
      </div>
    </section>
  );
};
