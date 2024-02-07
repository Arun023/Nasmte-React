import { useSelector } from "react-redux";
export const FilterData = (search, List) =>
  (Result = List.filter((res) =>
    res.info.name.toLowerCase().includes(search.toLowerCase())
  ));

export const TotalPrice = () => {
  const Cart = useSelector((state) => state.cart.items);

  const total = Cart.reduce((data, index) => {
    return (data += index.item.price
      ? (index.item.price / 100) * index.count
      : (index.item.defaultPrice / 100) * index.count);
  }, 0);

  return total;
};
