import { FaPlus, FaSearch, FaSyncAlt } from "react-icons/fa";

const NavBar = ({ showModalFunction, noteClearanceFunction }) => {
  return (
    <nav className="NavBar">
      <h1>NOTELY</h1>
      <div className="actions">
        <FaPlus className="action-icon" onClick={showModalFunction} />
        <FaSearch className="action-icon" />
        <FaSyncAlt className="action-icon" onClick={noteClearanceFunction} />
      </div>
    </nav>
  );
};

export default NavBar;
