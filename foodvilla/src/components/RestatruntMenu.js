import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Star from "../image/star.png";
import ShimmerUi from "./ShimmerUi";
import useRestaruntMenu from "../utils/useRestaruntMenu";

const RestaruntMenu = () => {
  // How to Read Dynamic URL params
  const { resId } = useParams();

  const restarunt = useRestaruntMenu(resId);

  if (!restarunt) {
    return <ShimmerUi />;
  } else {
    return (
      <>
        <div className="mw-100 h-100 bg-secondary d-flex justify-content-center p-5">
          <img
            src={IMG_CDN_URL + restarunt.cloudinaryImageId}
            className="w-25"
          />
          <div className="text-white mx-5">
            <h3>{restarunt.name}</h3>
            <p>{restarunt.cuisines.join(", ")}</p>
            <p>
              {restarunt.area}, {restarunt.locality}
            </p>

            <div className="d-flex justify-content-start align-items-baseline">
              <img src={Star} style={{ width: "3%", color: "white" }} />{" "}
              <span className="mx-2">{restarunt.avgRatingString} |</span>
              <p className="">23 Mins</p>
              <p className="mx-2"> &nbsp; Delivery time | </p>
              <div>
                <p>{restarunt.costForTwoMsg}</p>
              </div>
            </div>
          </div>
        </div>
        {/* " "} */}
        <div className="p-5">
          {/* {console.log(Object.values(restarunt?.menu?.items))} */}
          {Object.values(restarunt?.menu?.items).map((item) => {
            return (
              <div
                className="card my-5 mx-auto p-2"
                style={{ width: "100%" }}
                key={item.id}
              >
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          ₹ {(item.price / 100).toFixed(2)}
                        </small>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 w-25">
                    <img
                      src={IMG_CDN_URL + item.cloudinaryImageId}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};
export default RestaruntMenu;
