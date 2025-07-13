import React, { useRef } from "react";
import client from "../utils/OpenAi";

const GptSearchBar = () => {
  const search = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(search.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      search.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const completion = await client.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: gptQuery }],
       max_tokens: 512 
    });

    console.log(completion.choices);
  };

  return (
    <div className="bg-slate-600  pt-40">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input ref={search} type="search" placeholder="kya dekhega lavde aaj" />

        <button
          className="bg-violet-800 text-white px-4 py-2 rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
