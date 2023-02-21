import BasicForm from "./BasicForm";
import AdvancedForm from "./AdvancedForm";
import { useState } from "react";

const Contact = () => {
  const [view, setView] = useState("customer");
  return (
    <div className="w-full">
      <nav className="d-flex justify-content-center m-5">
        <h3 onClick={() => setView("customer")}>Customer</h3>
        <h3 onClick={() => setView("advance")} className="mx-4">
          Buisness
        </h3>
      </nav>

      {view === "customer" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
};

export default Contact;
