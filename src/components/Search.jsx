import React, {useState} from "react";

function Search() {
  const [text, setText] = useState('');

  const googleSearch = () => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(text + ' jobs')}`;
    window.open(searchUrl, '_blank');
  }

  const handleChange = (event) => setText(event.target.value)
  return (
    <div class="input-container">
      <input type="text" name="text" class="input" placeholder="Search by job title" value={text} onChange={handleChange}/>
      <span class="icon" onClick={googleSearch}  style={{cursor: "pointer"}}>
        <svg
          width="19px"
          height="19px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              opacity="1"
              d="M14 5H20"
              stroke="#000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              opacity="1"
              d="M14 8H17"
              stroke="#000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
              stroke="#000"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              opacity="1"
              d="M22 22L20 20"
              stroke="#000"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </span>
    </div>
  );
}

export default Search;
