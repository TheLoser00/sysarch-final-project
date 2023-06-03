import React from "react";
import Search from "../components/Search";
import Resume from "../components/Resume";

function Home() {
  const jobs = ["IT", "Virtual Assistant", "Business Analyst", "Manager", "Marketing", "Sales",
"Remote", "HR", "Part Time", "Internship", "Web Developer", "Researcher"];

const googleSearch = (props) => {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(props + ' jobs')}`;
  window.open(searchUrl, '_blank');
}


  return (
    <div className="page">
      <div className="upper-home">
        <div>
          <Search />
        </div>
        <div className="textContainer-holder">
          <h3>
            Seek the perfect <b>job</b>
          </h3>
        </div>
        <div className="resume-upload">
          <Resume />
        </div>
      </div>
      <div className="lower-home">
        
        <div className="popular-searches-container">
        <h5>Popular Searches</h5>
          <div className="searchlist">
            {jobs.map((job, index) => (
              <div className="pill">
                <label>
                  <a key={index} style={{cursor: "pointer"}} onClick={() => googleSearch(job)}>{job}</a>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Home;
