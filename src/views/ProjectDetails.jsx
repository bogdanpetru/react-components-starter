import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Main from "../components/Main";
import { getProject } from "../dataService";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ProjectDetails() {
  const query = useQuery();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    getProject(query.get("q")).then((data) => {
      setRepo(data);
    });
  }, []);

  return (
    <>
      <Header title={`GitHub Explorer: ${repo?.name ?? ""}`} />
      <Main>
        <h1>Project Details</h1>
        {repo ? <>{JSON.stringify(repo)}</> : <Loader />}
      </Main>
    </>
  );
}

export default ProjectDetails;
