import { useState, useEffect } from "react";
const omdbApiKey = "f84fc31d";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      //   callback?.();
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setLoader(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${omdbApiKey}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("something went wrong with fetching movie");

          const data = await res.json();
          if (data.Response === "False") throw new Error("movie not found");

          setMovies(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setLoader(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleCloseMovie();
      fetchMovie();

      return function () {
        controller.abort();
      };
    },

    [query]
  );

  return { movies, loader, error };
}
