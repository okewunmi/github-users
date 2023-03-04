import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUsers] = useState(mockUser);
  const [repo, setRepo] = useState(mockRepos);
  const [followers, setFellowers] = useState(mockFollowers);

  // requestloading

  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  // error
  // chech rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          // throw an error
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider value={{ githubUser, repo, followers, requests }}>
      {children}
    </GithubContext.Provider>
  );
};
export { GithubContext, GithubProvider };
