import HomeLink from "./HomeLink";
import './Home.css'

function Soda() {
  return (
    <div className="container">
      <div className="item">
        <img src="https://media4.giphy.com/media/uxjoryXHRyMnIb1GLG/giphy.gif?cid=ecf05e47heb17jif9e4l9ur7kkeycb33qfgtqnzp0u4wn1mu&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
      </div>

      <div className="item-right">
        OMG sugary soda.
        <HomeLink />
      </div>

      <div className="item">
        <img src="https://media4.giphy.com/media/uxjoryXHRyMnIb1GLG/giphy.gif?cid=ecf05e47heb17jif9e4l9ur7kkeycb33qfgtqnzp0u4wn1mu&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
      </div>
    </div>
  );
}

export default Soda;
