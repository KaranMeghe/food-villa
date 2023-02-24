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
        <div>
          <h1>About Us Page</h1>
          <p>This Page is About us</p>
          <ProfileClass />
        </div>
      </>
    );
  }
}

export default About;
