import { Link } from "react-router-dom";

const ListItem = ({ path, name }) => {
  return (
    <li className="navigation__item">
      <Link className="navigation__link" to={path}>
        {name}
      </Link>
    </li>
  );
};

export default ListItem;
