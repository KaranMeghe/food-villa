import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
const App = () => {
  /**
     Header
       - Logo 
       - Navbar
       - Cart
       
     Body
       - Search Bar
       - RestaruntList
        - RestaruntCard
          - image
          - name
          - rating
          - cusines

     Footer
       - Links
       - CopyRight     
      **/

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
export default App;
