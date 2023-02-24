import React from "react";
import axios from "axios";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        company: "Dummy Company",
        avatar_url: "Dummy Url",
        count: 0,
      },
    };
  }

  async componentDidMount() {
    // Api Call
    const data = await axios.get("https://api.github.com/users/KaranMeghe");
    const userData = data.data;
    console.log(data);
    console.log(userData);

    this.setState({
      userInfo: userData,
    });
  }

  render() {
    const { name, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <img src={avatar_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{bio}</p>
          </div>

          <div className="card-body">
            <a
              href="https://twitter.com/karan_meghe"
              className="card-link text-decoration-none"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/karan-meghe-015610209/"
              className="card-link text-decoration-none"
            >
              <FaLinkedin /> Linkedin
            </a>

            <a
              href="https://github.com/KaranMeghe"
              className="card-link text-decoration-none"
            >
              <FaGithub /> Github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileClass;
