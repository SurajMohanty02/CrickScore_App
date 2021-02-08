const API_KEY = "I9uKpAfPyfPtyVT7gvgR9mWUlvE3";
//get matches
export const getmatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error", error);
    });
};

//Match details
export const getmatchdetails = (id) => {
  const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
  return fetch(url)
    .then((data) => data.json())
    .catch((error) => console.log("error", error));
};
