import React, { useState, useEffect } from "react";
import { getProjects } from "../../dataService";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Main from "../../components/Main";
import Search from "./components/Search";
import CardList from "./components/CardList";

function ProjectList() {
  const title = "GitHub Explorer";
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProjects().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Header title={title} />
      <Main>
        <Search
          search={search}
          onChange={setSearch}
          value={search}
          onSubmit={() => {
            setLoading(true);
            getProjects(search).then((data) => {
              setData(data);
              setLoading(false);
            });
          }}
        />
        {loading ? <Loader /> : <CardList items={data} />}
      </Main>
    </div>
  );
}

export default ProjectList;
