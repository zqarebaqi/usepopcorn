import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { useState } from "react";
import App from "./App";

// import StarRating from "./StarRating";

// function TestOfStars() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         size={20}
//         color="blue"
//         onSetRating={setMovieRating}
//       />
//       <p>{movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      msg={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defualtRating={3} />

    <TestOfStars /> */}
  </React.StrictMode>
);
