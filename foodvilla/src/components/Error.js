import { useRouteError } from "react-router-dom";
import errorImg from "../image/error.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText, data } = error;

  return (
    <>
      <div
        className="alert alert-danger d-flex align-items-center flex-column"
        role="alert"
        style={{ backgroundColor: "#e67e22", color: "#fff" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>Oops!! Something Went Wrong!! </div>
        <h2>{`${status} : ${statusText}`}</h2>
        <p>{`${data}`}</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={errorImg} alt="error" style={{ width: "60%" }} />
        <Link to="/">
          <button
            className="btn fs-5 my-2"
            style={{ backgroundColor: "#e67e22", color: "#fff" }}
          >
            Go Back
          </button>{" "}
        </Link>
      </div>
    </>
  );
};

export default Error;
