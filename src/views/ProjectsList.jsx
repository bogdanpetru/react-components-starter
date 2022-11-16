import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../dataService";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Main from "../components/Main";

const Search = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit();
      }}
      className="search-form"
    >
      <input
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        className="input"
      />
      <button disabled={props?.value?.length < 3} className="button">
        Search
      </button>
    </form>
  );
};

const CardList = (props) => {
  return (
    <ul>
      {props.items?.map((item) => {
        return (
          <li key={item.id} className="repo-card">
            <span className="title">
              <Link to={`view?q=${item.full_name}`}>{item.name}</Link>
            </span>
            <span className="description">{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

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
