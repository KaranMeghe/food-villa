import BasicForm from "./BasicForm";
import AdvancedForm from "./AdvancedForm";
import { useState } from "react";

const Contact = () => {
  const [view, setView] = useState("basic");
  return (
    <div>
      <nav className="d-flex justify-content-center justify-content-around">
        <h3 onClick={() => setView("basic")}>Basic</h3>
        <h3 onClick={() => setView("advance")}>Advanced</h3>
      </nav>

      {view === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
};

export default Contact;
