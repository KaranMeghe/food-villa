import Star from "../image/star.png";

const RestaruntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  time,
  avgRating,
  price,
}) => {
  return (
    <div className="card my-5 mx-1" style={{ width: "22rem" }}>
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
        <p className="fw-lighter fs-6 text">{cuisines}</p>
        <div className="d-flex justify-content-between align-items-baseline">
          <div
            className="d-flex justify-content-center align-items-center text-center px-1 my-3"
            style={{ backgroundColor: "#2ecc71", width: "20%", height: "2%" }}
          >
            <img
              src={Star}
              style={{ height: "13px", display: "inline-block" }}
              alt="star"
            ></img>
            <p
              className="my-0 mx-1"
              style={{ color: "#fff", fontSize: "12px" }}
            >
              {avgRating}
            </p>
          </div>
          <p className="fw-lighter">{time}</p>
          <p className="fw-lighter">₹{price} For Two Persons</p>
        </div>
      </div>
    </div>
  );
};
export default RestaruntCard;
