import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("CDM");
  }

  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <>
        <h2>Hello This is Class Based Component {this.props.name}99 </h2>
        <p>Current Count is : {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Submit
        </button>
      </>
    );
  }
}

export default ProfileClass;
