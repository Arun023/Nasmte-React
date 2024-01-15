import { IoIosArrowDown } from "react-icons/io";
const RestaurantCategory = ({
  itemCards,
  title,
  setCurrentIndex,
  currentIndex,
}) => {
  return (
    <div
      className="my-4 cursor-pointer"
      onClick={() => setCurrentIndex((prev) => (prev === title ? "" : title))}>
      {/* Header or title */}
      <div className="flex justify-between">
        <div className="font-bold text-xl">
          {title} ({itemCards?.length})
        </div>
        <IoIosArrowDown
          className={`${
            currentIndex === title ? "" : "rotate-180"
          } duration-200`}
          size={25}
        />
      </div>
      {/* Body */}
      {currentIndex === title && (
        <div>
          {itemCards.map((data) => {
            return <div>{data?.card?.info?.name}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
