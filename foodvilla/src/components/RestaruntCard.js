import { BsFillStarFill } from "react-icons/bs";

const RestaruntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  slaString,
  avgRating,
  costForTwoString,
}) => {
  return (
    <div
      className="card my-5 mx-1"
      style={{ maxWidth: "24rem", height: "81%" }}
    >
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h4>{name}</h4>
        <p className="fw-lighter fs-6 text">{cuisines.join(", ")}</p>
        <div className="d-flex justify-content-between align-items-baseline">
          <div
            className="d-flex justify-content-center align-items-center text-center p-1 my-3"
            style={
              avgRating >= 4
                ? { backgroundColor: "#2ecc71", width: "20%", height: "2%" }
                : { backgroundColor: "#f0932b", width: "20%", height: "2%" }
            }
          >
            <BsFillStarFill className="fs-8 text-light" />
            <p
              className="my-0 mx-1 "
              style={{ color: "#fff", fontSize: "14px" }}
            >
              {avgRating}
            </p>
          </div>
          <p className="fw-lighter">{slaString}</p>
          <p className="fw-lighter">{costForTwoString}</p>
        </div>
      </div>
    </div>
  );
};
export default RestaruntCard;
