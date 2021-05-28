import React from "react";

function Toggle() {
  const [show, toggleShow] = React.useState(true);

  return (
    <div>
      <button onClick={() => toggleShow(!show)}>
        toggle: {show ? "show" : "hide"}
      </button>
      {show && (
        <div
          style={{
            backgroundColor: "#F6BB42",
            width: "40%",
            height: "100%",
          }}
        >
          In div miad ro ax
        </div>
      )}
    </div>
  );
}
