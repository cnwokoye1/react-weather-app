import React from "react";

const TopButtons = ({ setQuery }) => {
  // array of objects
  const cities = [
    {
      id: 1,
      name: "New York",
    },
    {
      id: 2,
      name: "London",
    },
    {
      id: 3,
      name: "Berlin",
    },
    {
      id: 4,
      name: "Paris",
    },
    {
      id: 5,
      name: "Tokyo",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2
        rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
