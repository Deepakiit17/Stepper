import { useEffect } from "react";
import { useState } from "react";

function Component3(props) {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const payload = { clubID: props.clubID };
      fetch("https://example.com/api4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }, [props.clubID]);
  
    return <div>{data && <p>{data.message}</p>}</div>;
  }
  
  export default Component3;
  