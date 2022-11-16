import { Link } from "react-router-dom";

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

export default CardList;
