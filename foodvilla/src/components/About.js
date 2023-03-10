import React from "react";
import ProfileClass from "./ProfileClass";
// import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1 className="my-5">About Us Page</h1>
          {/* <UserContext.Consumer>
            {({ user }) => <p>{user.name}</p>} // passing context in class based component
          </UserContext.Consumer> */}

          <ProfileClass />
        </div>
      </>
    );
  }
}

export default About;
