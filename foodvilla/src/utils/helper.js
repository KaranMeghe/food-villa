export function filterData(searchInput, restaurants) {
  // 8 restraunt list = > filtered  rest with "King"
  const filterName = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filterName;
}
