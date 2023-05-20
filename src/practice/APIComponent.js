import React, { useState, useEffect } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

function APIComponent() {
  const [clubID, setClubID] = useState(null);

  useEffect(() => {
    fetch("https://example.com/api1")
      .then((response) => response.json())
      .then((data) => setClubID(data.clubID))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {clubID && (
        <>
          <Component1 clubID={clubID} />
          <Component2 clubID={clubID} />
          <Component3 clubID={clubID} />
        </>
      )}
    </div>
  );
}

export default APIComponent;
