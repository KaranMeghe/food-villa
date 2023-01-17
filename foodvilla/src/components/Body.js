import RestaruntCard from "./RestaruntCard";
import { restaruntData } from "../config";
import { useState } from "react";

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
  const [restarunts, setRestarunts] = useState(restaruntData);

  //config driven ui
  return (
    <>
      <div className="container-fluid my-4" style={{ width: "50%" }}>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          {/* {console.log(searchInput)} */}
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={() => {
              const data = filterData(searchInput, restarunts);
              setRestarunts(data);
            }} //need to filter the data //update the state - restarunts;
          >
            Search
          </button>
        </form>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly px-3">
        {restarunts.map((restarunt) => {
          return <RestaruntCard {...restarunt.data} key={restarunt.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
