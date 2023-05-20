import { useEffect } from "react";
import { useState } from "react";

function Component2(props) {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(`https://example.com/api3/${props.clubID}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }, [props.clubID]);
  
    return <div>{data && <p>{data.message}</p>}</div>;
  }
  
  export default Component2;
  