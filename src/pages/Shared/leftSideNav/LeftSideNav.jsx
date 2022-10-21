import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4 className="mb-4 text-lg-start">All Categories </h4>
      {categories.map((category) => (
        <p key={category.id} className="text-lg-start">
          {" "}
          <NavLink
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              isActive
                ? " text-decoration-none"
                : "text-decoration-none text-info"
            }
          >
            {category.name}
          </NavLink>{" "}
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
