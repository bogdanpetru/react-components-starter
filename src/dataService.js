import { mockRepos } from "./mock_data";
const SEARCH_URL = "https://api.github.com/search/repositories";
const REPO_URL = "https://api.github.com/repos";

export const getRepos = (query) => {
  let url = SEARCH_URL;

  if (query) {
    url += `?q=${query}`;
  } else {
    url += "?q=stars:>1000";
  }

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.items);
};

export const getRepo = (fullName) => {
  const url = `${REPO_URL}/${fullName}`;

  return fetch(url).then((response) => response.json());
};

export const getMockRepos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRepos.items);
    }, 1000);
  });
};

export const getMockRepo = (fullName) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve(mockRepos.items.find((item) => item.full_name === fullName));
    }, 1000);
  });
};
