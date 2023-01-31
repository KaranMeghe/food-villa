import RestaruntCard from "./RestaruntCard";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import axios from "axios";
import { Link } from "react-router-dom";

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
  // const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getRestarunts();
  }, []);

  // async function getRestarunts() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.098385&lng=79.068965&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   console.log(data);
  //   const json = await data.json();
  //   setAllRestarunts(json?.data?.cards[2]?.data?.data?.cards);
  //   setFilteredRestarunts(json?.data?.cards[2]?.data?.data?.cards);

  //   console.log(json);
  // }

  async function getRestarunts() {
    const data = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.098385&lng=79.068965&page_type=DESKTOP_WEB_LISTING"
    );

    console.log(data);

    setAllRestarunts(data?.data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestarunts(data?.data?.data?.cards[2]?.data?.data?.cards);
  }

  function notValidSearch() {
    if (filteredRestarunts.length === 0) {
      let errorMsg = `Enter Valid Search: ${searchInput} is not found`;
      return errorMsg;
    }
  }

  //config driven ui
  return allRestarunts.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="container-fluid my-4" style={{ width: "50%" }}>
        <form className="d-flex" onSubmit={(event) => event.preventDefault()}>
          <input
            className="form-control me-2" //localhost:3000/?#()
            type="search"
            placeholder="Search for restarunts"
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
        </form>
        <p className="p-2 text-danger">{notValidSearch()}</p>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly align-items-baswline px-3">
        {filteredRestarunts.map((restarunt) => {
          return (
            <Link
              to={"/restarunt/" + restarunt.data.id}
              key={restarunt.data.id}
              className="text-decoration-none text-dark"
            >
              <RestaruntCard {...restarunt.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
