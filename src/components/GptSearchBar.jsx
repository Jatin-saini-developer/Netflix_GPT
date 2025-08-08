import React, { useRef } from "react";
import client from "../utils/OpenAi";
import { OPEN_API } from "../utils/constants";

const GptSearchBar = () => {
  const search = useRef(null);

  const handleGptSearchClick = async () => {
    (e) => {
      e.preventDefault();
    };

    console.log(search.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system. Only respond with **exactly 5 movie names** for this query: " +
      search.current.value +
      ". Return them **only as a comma-separated list**, with nothing else. For example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const completion = await client.chat.completions.create({
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${OPEN_API} `,
      // },
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: gptQuery }],
      max_tokens: 512,
    });

    console.log(completion.choices);
  };

  return (
    <div className="pt-35 flex  justify-center w-full max-w-7xl">
      <form
        className="w-[1280px] max-w-4xl px-4 flex gap-2 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >

        <input
          className="px-2 max-w-full bg-white flex flex-1 focus:outline-none focus:ring-0 focus:border-transparent "
          ref={search}
          type="search"
          placeholder="What Would You Like to Watch..."
        />

        <button
          className="bg-[#da2c38] text-white px-4 py-2 rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
