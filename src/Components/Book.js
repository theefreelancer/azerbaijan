import React, { useState } from "react";
import axios from "axios";

function Book() {
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
          return <li key={index}>{movie.title}</li>;
        });
        console.log(movieElement);
        setData(movieElement);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // const options = {
  //   method: "GET",
  //   url: "https://ny-times-news-titles-and-urls.p.rapidapi.com/news",
  //   headers: {
  //     "X-RapidAPI-Key": "471c9f6ff4mshcf58c740ee076d0p1a35e6jsnc329e519813d",
  //     "X-RapidAPI-Host": "ny-times-news-titles-and-urls.p.rapidapi.com",
  //   },
  // };
  // const filterContent = () => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       const sportsElements = response.data.sports;
  //       // let sportsElement;

  //       const sportsElement = sportsElements.map((item, index) => <li key={item.id}>{item.}</li>
  //       );

  //       console.log(sportsElement);
  //       setData(sportsElement);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  return (
    <div>
      <label>
        Name:
        <input placeholder="Enter Preferrence" />
      </label>
      <button onClick={filterContent}>Search</button>
      {data  && <p>{data}</p>}
    </div>
  );
}

export default Book;
