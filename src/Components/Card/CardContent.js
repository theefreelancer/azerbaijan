// }

import React, { useState } from "react";
import axios from "axios";

export const cardImage =(props)=>{

  const isImageURL = props.image;
  // If an image was passed:
  if (isImageURL) {
    return (
      <div className="styleImage">
        <img
          style={{ width: props.width + "px", marginTop: "-8%" }}
          src={props.image}
          alt=""
        />
      </div>
    );
  }
  return null;
}


export default function CardContent() {
  const [data, setData] = useState();

  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/advancedsearch",
    params: {
      start_year: "1970",
      end_year: "2020",
      min_imdb: "6",
      max_imdb: "7.8",
      genre: "action",
      language: "english",
      type: "movie",
      sort: "latest",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": "471c9f6ff4mshcf58c740ee076d0p1a35e6jsnc329e519813d",
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  };

  const filterContent = () => {
    axios
      .request(options)
      .then(function (response) {
        const movieElements = response.data.results;
        const movieElement = movieElements.map((movie, index) => {
          return (
            <div className="styleCard" key={index}>
              {movie}
            </div>
            // <Card key={index} {...movie} />
            // <p className="styleCardTitle">{movie.title}</p>
            // <p className="styleLocationLabel">{movie.location}</p>
            // <p className="styleDescription">{movie.description}</p>
          );
        });
        console.log(movieElement);
        setData(movieElement);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  return (
    <div>
      <label>
        Name:
        <input placeholder="Enter Preferrence" />
      </label>
      <button onClick={filterContent}>Search</button>
      <div className="styleCardContent">{data && <p>{data}</p>}</div>
    </div>
  );
}

// export default CardContent;

// import React from "react";

// function CardContent(props) {
//   return (
//     <div className="styleCardContent">
//       <p className="styleCardTitle">{props.title}</p>
//       <p className="styleLocationLabel">{props.location}</p>
//       <p className="styleDescription">{props.description}</p>
//     </div>
//   );
