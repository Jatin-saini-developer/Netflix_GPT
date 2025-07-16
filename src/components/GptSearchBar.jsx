import React, { useRef } from "react";
import client from "../utils/OpenAi";
import {OPEN_API} from "../utils/constants";

const GptSearchBar = () => {
  const search = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(search.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system. Only respond with **exactly 5 movie names** for this query: " +
      search.current.value +
      ". Return them **only as a comma-separated list**, with nothing else. For example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const completion = await client.chat.completions.create({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPEN_API} `, 
      },
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: gptQuery }],
      max_tokens: 512,
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
