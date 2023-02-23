import React from "react";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
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
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent cdm");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <div>
          <h1>About Us Page</h1>
          <p>This Page is About us</p>
          <ProfileClass name={"Cahew"} />
          <Profile name={"Almond"} />
        </div>
      </>
    );
  }
}

export default About;
