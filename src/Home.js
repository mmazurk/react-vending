import "./Home.css";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <div className="container">
        <div className="item-left">This is your vending machine.</div>
        <img
          src="https://images.unsplash.com/photo-1575224526797-5730d09d781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          style={{"width": "500px"}}
        />
        <div className="item-right">
        <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
