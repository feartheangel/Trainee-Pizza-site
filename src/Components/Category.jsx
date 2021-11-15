import React from "react";

function Category({ items, onClickhand }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const selectPopUp = (index) => {
    setActiveItem(index);
  };

  return (
    <div>
      {" "}
      <div className="categories">
        <ul>
          <li
            className={activeItem === null ? "active" : ""}
            onClick={() => selectPopUp(null)}
          >
            Все
          </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeItem === index ? "active" : ""}
                onClick={() => selectPopUp(index)}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
