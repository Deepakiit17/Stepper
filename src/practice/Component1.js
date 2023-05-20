import { useEffect, useState } from "react";

function Component1(props) {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(`https://example.com/api2/${props.clubID}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }, [props.clubID]);
  
    return <div>{data && <p>{data.message}</p>}</div>;
  }
  
  export default Component1;
  