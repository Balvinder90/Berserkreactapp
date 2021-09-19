import ListItem from "../components/ListItem";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <ListItem path="/" name="About" />
        <ListItem path="Volumes" name="Volumes" />
        <ListItem path="Author" name="Author" />
      </ul>
    </nav>
  );
};

export default Navigation;
