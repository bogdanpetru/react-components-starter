const SEARCH_URL = "https://api.github.com/search/repositories";
const REPO_URL = "https://api.github.com/repos";

export const getProjects = (query) => {
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

export const getProject = (fullName) => {
  const url = `${REPO_URL}/${fullName}`;

  return fetch(url).then((response) => response.json());
};
