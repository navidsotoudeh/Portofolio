import React from "react";

export default function Toggle() {
  const [show, toggleShow] = React.useState(false);

  return (
    <div>
      <button onClick={() => toggleShow(!show)}>
        {show ? "hide" : "show"}
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
