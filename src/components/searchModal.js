import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const SearchModal = (props) => {
  return (
    <Modal
      open={props.searchModalShowStatement}
      onClose={props.closeSearchModalFunction}
      classNames={{
        modal: "react_responsive_modal_1 react_responsive_modal_2",
        closeIcon: "form_close_btn",
      }}
      center
    >
      <div className="form_modal search_modal">
        <h1>Search Note</h1>
        <form onSubmit={props.noteSearchFunction}>
          <input
            type="text"
            name="search-input"
            placeholder="Search By name"
            onChange={props.noteSearchQueryFunction}
            value={props.searchQueryValue}
            required
          />
          <button type="submit" onClick={props.closeSearchModalFunction}>
            Search Note
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default SearchModal;
