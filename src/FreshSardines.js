import HomeLink from "./HomeLink";
import "./Home.css";

function FreshSardines() {
  return (
    <div>
      <div className="container" style={{"margin": "30px   auto"}}>
        <div>
          <img
            src="https://media0.giphy.com/media/l41m3g3u9aqiStOuY/giphy.gif?cid=ecf05e479a7s9l7yaps58lyb5b0jcd89s7ym8e41y91jcxlq&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            style={{ width: "1000px" }}
          />
        </div>
      </div>

      <div className="item-right" style={{"margin": "0px auto"}}>
          Sardines! Get me out of here.
          <HomeLink />{" "}
        </div>

    </div>
  );
}

export default FreshSardines;
