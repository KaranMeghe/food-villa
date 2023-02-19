import BasicForm from "./BasicForm";
import AdvancedForm from "./AdvancedForm";
import { useState } from "react";

const Contact = () => {
  const [view, setView] = useState("buisness");
  return (
    <div className="w-full">
      <nav className="d-flex justify-content-center m-5">
        <h3 onClick={() => setView("buisness")} className="mx-5">
          Buisness
        </h3>
        <h3 onClick={() => setView("advance")}>Advanced</h3>
      </nav>

      {view === "buisness" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
};

export default Contact;
