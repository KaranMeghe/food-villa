import { useState } from "react";

const InstMart = () => {
  const [visibleSection, setIsVisibleSection] = useState("team");

  return (
    <div>
      <h1>Welcome to Insta Mart</h1>
      <p>A place where you can order groceries, medicines and many more</p>
      <Section
        title={"About instamart"}
        discription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "about"}
        toggleVisible={() =>
          setIsVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />

      <Section
        title={"Our Team"}
        discription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "team"}
        toggleVisible={() =>
          setIsVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />

      <Section
        title={"About Carrers"}
        discription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "carrer"}
        toggleVisible={() =>
          setIsVisibleSection(visibleSection === "carrer" ? "" : "carrer")
        }
      />
    </div>
  );
};

const Section = ({ title, discription, isVisible, toggleVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [buttonValue, setButtonValue] = useState("See More");
  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <button onClick={toggleVisible}>
          {isVisible ? "Hide" : "See More"}
        </button>
        {isVisible && <p>{discription}</p>}
      </div>
    </div>
  );
};

export default InstMart;
