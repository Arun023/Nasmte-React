import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FoodList from "./FoodList";
const RestaurantCategory = ({
  restaurant,
  itemCards,
  title,
  setCurrentIndex,
  currentIndex,
  categories,
}) => {
  const [openMenu, setOpenMenu] = useState("");
  return (
    <>
      <div className="my-4 ">
        {itemCards !== undefined ? (
          <div
            className="flex justify-between cursor-pointer"
            onClick={() =>
              setCurrentIndex((prev) => (prev === title ? "" : title))
            }>
            <div className="font-bold text-xl">
              {title} {`(${itemCards?.length})`}
            </div>
            <IoIosArrowDown
              className={`${
                currentIndex === title ? "" : "rotate-180"
              } duration-200`}
              size={25}
            />
          </div>
        ) : (
          <div className="font-bold text-xl">{title}</div>
        )}
        {itemCards !== undefined ? (
          currentIndex === title &&
          itemCards.map((data) => {
            return <FoodList restaurant={restaurant} {...data} />;
          })
        ) : (
          <div>
            {categories?.map(({ title, itemCards }) => {
              return (
                <>
                  <div
                    key={title}
                    onClick={() =>
                      setOpenMenu((prev) => (prev === title ? "" : title))
                    }
                    className="font-medium  text-lg flex justify-between mt-3 cursor-pointer">
                    {title} ({itemCards?.length})
                    <IoIosArrowDown
                      className={`${
                        openMenu === title ? "" : "rotate-180"
                      } duration-200`}
                      size={25}
                    />
                  </div>
                  {openMenu === title &&
                    itemCards.map((data) => {
                      return <FoodList restaurant={restaurant} {...data} />;
                    })}
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantCategory;
