export const FilterData = (search, List) =>
  (Result = List.filter((res) =>
    res.info.name.toLowerCase().includes(search.toLowerCase())
  ));
