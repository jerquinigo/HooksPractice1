import React, { useState, useEffect } from "react";
import axios from "axios";

const Giphy = () => {
  const [gifs, setGifs] = useState([]);
  useEffect(
    () => {
      async function fetchData() {
        const response = await axios.get(
          `http:gifyurlwithparameterandapikey.com`
        );
        setGifs(response.data.data);
      }
      fetchData();
    },
    [gifs]
  );

  //that empty arr is how you make the call once. If not it will always rerender.
  //the empty array can also have an argument. having this will also cause it to render if there is a change in the state. it can accept other stuff besides state.
  //after that you can just use the regular map to present the image to the dom.

  //ex. gifs.map(el => {gifs})
  return (
    <div>
      <div />
    </div>
  );
};
