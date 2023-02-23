import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Hello This is Function Component {props.name}101 </h2>
      <p>Corrent Count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default Profile;
