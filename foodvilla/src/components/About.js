import React from "react";
import ProfileClass from "./ProfileClass";

// const About = () => {
//   return (
//     <>
//       <div>
//         <h1>About Us Page</h1>
//         <p>This Page is About us</p>
//         <ProfileClass name={"Cahew"} />
//         <Profile name={"Almond"} />
//       </div>
//     </>
//   );
// };

class About extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1 className="my-5">About Us Page</h1>
          <ProfileClass />
        </div>
      </>
    );
  }
}

export default About;
