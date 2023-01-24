import RestaruntCard from "./RestaruntCard";
import { restaruntData } from "../config";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";

function filterData(searchInput, restaurants) {
  // 8 restraunt list = > filtered  rest with "King"
  const filterName = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filterName;
}

const Body = () => {
  // searchText and restarunts is a local state variable
  const [searchInput, setSearchInput] = useState("");
  const [allRestarunts, setAllRestarunts] = useState([]);
  const [filteredRestarunts, setFilteredRestarunts] = useState([]);

  useEffect(() => {
    getRestarunts();
  }, []);

  async function getRestarunts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.098385&lng=79.068965&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
    const json = await data.json();
    setAllRestarunts(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestarunts(json?.data?.cards[2]?.data?.data?.cards);

    console.log(json);
  }

  //config driven ui
  return allRestarunts.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="container-fluid my-4" style={{ width: "50%" }}>
        <div className="d-flex">
          <input
            className="form-control me-2" //localhost:3000/?#()
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => setSearchInput(event.target.value)}
            value={searchInput}
          />

          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={() => {
              const data = filterData(searchInput, allRestarunts);
              setFilteredRestarunts(data);
            }} //need to filter the data //update the state - restarunts;
          >
            Search
          </button>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly px-3">
        {filteredRestarunts.map((restarunt) => {
          return <RestaruntCard {...restarunt.data} key={restarunt.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
