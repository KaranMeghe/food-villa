import RestaruntCard from "./RestaruntCard";
import { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import {
  useGetFilteredRestarunt,
  useGetRestarunt,
} from "../utils/useGetRestarunt";
import useOnline from "../utils/useOnline";

const Body = () => {
  // searchText and restarunts is a local state variable
  const [searchInput, setSearchInput] = useState("");
  const restarunt = useGetRestarunt();
  const [filteredRestarunts, setFilteredRestarunts] = useGetFilteredRestarunt();

  function notValidSearch() {
    if (filteredRestarunts.length === 0) {
      let errorMsg = `Enter Valid Search: ${searchInput} is not found`;
      return errorMsg;
    }
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h3 className="text-center my-5">
        🔴 You are OffLine, please check your internet Connection
      </h3>
    );
  }

  //config driven ui
  return restarunt.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="container-fluid my-4 fixed" style={{ width: "50%" }}>
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
              const data = filterData(searchInput, restarunt);
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
