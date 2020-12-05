import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const FormModal = (props) => {
  return (
    <Modal
      open={props.showStatement}
      onClose={props.closeModalFunction}
      classNames={{
        modal: "react_responsive_modal",
        closeIcon: "form_close_btn",
      }}
      center
    >
      <div className="form_modal">
        <h1>Search Note</h1>
        <form onSubmit={props.noteSubmissionFunction}>
          <input type="text" name="search-input" placeholder="Search By name" />
          <button type="submit" onClick={props.closeModalFunction}>
            Create Note
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default FormModal;
