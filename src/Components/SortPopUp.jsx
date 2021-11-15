import React from "react";

function SortPopUp({ items }) {
  const [visiblePopUp, setVisiblePopUp] = React.useState(false);
  const sortRef = React.useRef();
  const [activeItem1, setActiveItem1] = React.useState(0);

  const toogleVisiblePopUp = () => {
    setVisiblePopUp(!visiblePopUp);
  };

  const activeLabel = items[activeItem1].name;

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopUp(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    // console.log(handleOutsideClick.path);
  }, []);

  const selectPopUp1 = (index) => {
    setActiveItem1(index);
  };

  return (
    <div>
      <div className="sort">
        <div className="sort__label">
          <svg
            className={visiblePopUp ? "rotated" : ""}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span
            className="sort_popular"
            onClick={toogleVisiblePopUp}
            ref={sortRef}
          >
            {activeLabel}
          </span>
        </div>
        {visiblePopUp && (
          <div className="sort__popup">
            <ul>
              {items &&
                items.map((obj, index) => (
                  <li
                    className={activeItem1 === index ? "active" : ""}
                    onClick={() => selectPopUp1(index)}
                    key={`${obj.type}_${index}`}
                  >
                    {obj.name}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SortPopUp;
