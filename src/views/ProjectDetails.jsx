import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Main from "../components/Main";
import { getRepo, getMockRepo } from "../dataService";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ProjectDetails() {
  const query = useQuery();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    getRepo(query.get("q")).then((data) => {
      setRepo(data);
    });
  }, []);

  return (
    <>
      <Header title={`GitHub Explorer: ${repo?.name ?? ""}`} />
      <Main>
        <h1>Project Details</h1>
        <div>
          <h2>{repo?.name}</h2>
          <p>
            <b>Owner: {repo?.owner?.login ?? ""}</b>
          </p>
          <p>{repo?.description}</p>
          {repo?.owner?.avatar_url && (
            <img className="owner-avatar" src={repo.owner.avatar_url} />
          )}
        </div>
        {repo ? <pre>{JSON.stringify(repo, null, 2)}</pre> : <Loader />}
      </Main>
    </>
  );
}

export default ProjectDetails;
