import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const FormModal = (props) => {
  return (
    <Modal
      open={props.noteModalShowStatement}
      onClose={props.closeFormModalFunction}
      classNames={{
        modal: "react_responsive_modal_1",
        closeIcon: "form_close_btn",
      }}
      center
    >
      <div className="form_modal">
        <h1>Create Your Note</h1>
        <form onSubmit={props.noteSubmissionFunction}>
          <input
            type="text"
            name="noteMainTitle"
            placeholder="Note Main Title"
            onChange={props.noteMainTitleFunction}
            value={props.noteMainTitleValue}
            required
          />
          <input
            type="text"
            name="noteSubTitle"
            placeholder="Note Sub Title"
            onChange={props.noteSubTitleFunction}
            value={props.noteSubTitleValue}
            required
          />
          <textarea
            name="noteDescription"
            cols="30"
            rows="10"
            placeholder="Note Description"
            onChange={props.noteDescriptionFunction}
            value={props.noteDescriptionValue}
            required
          />
          <button type="submit" onClick={props.closeFormModalFunction}>
            Create Note
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default FormModal;
