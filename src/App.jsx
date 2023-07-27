import React, { useState } from "react";
import F1 from "./F1";
import F2 from "./F2";
import "./App.css";

const App = () => {
  const [data, setdata] = useState(false);
  const [choose, setchoose] = useState();
  console.log(data);
  console.log(choose);

  return (
    <>
      {data ? (
        choose == "c" ? (
          <F1 />
        ) : (
          <F2 />
        )
      ) : (
        <div className="appd1">
          <h1>You Choose Any Technology</h1>

          <i
            class="fab fa-css3"
            style={{ fontSize: "50px", margin: "30px", color: "blue" }}
            onClick={() => {
              setdata(true), setchoose("c");
            }}
          />
          <i
            class="fab fa-bootstrap"
            style={{ fontSize: "50px", margin: "30px", color: "purple" }}
            onClick={() => setdata(true)}
          />
        </div>
      )}
    </>
  );
};

export default App;
