import HomeLink from "./HomeLink";

function Chips() {
  return (
    <div className="container">
      <div className="item-left">CHIPS CHIPS CHIPS CHIPS CHIPS</div>
      <img
        src="https://images.unsplash.com/photo-1621447504864-d8686e12698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1369&q=80"
        style={{ width: "800px" }}
      />
      <div className="item-right">
        <HomeLink />
      </div>
    </div>
  );
}

export default Chips;
