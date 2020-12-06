import { FaPlus, FaSearch, FaSyncAlt } from "react-icons/fa";

const NavBar = ({
  showFormModalFunction,
  noteClearanceFunction,
  showSearchModalFunction,
}) => {
  return (
    <nav className="NavBar">
      <h1>NOTELY</h1>
      <div className="actions">
        <FaPlus className="action-icon" onClick={showFormModalFunction} />
        <FaSearch className="action-icon" onClick={showSearchModalFunction} />
        <FaSyncAlt className="action-icon" onClick={noteClearanceFunction} />
      </div>
    </nav>
  );
};

export default NavBar;
