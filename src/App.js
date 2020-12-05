import { Fragment, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import FormModal from "./components/formModal";
import Board from "./components/Board";

function App() {
  // show and hide implementations on modal

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  // got the main and sub title of the note

  const [noteMainTitle, setNoteMainTitle] = useState("");

  const handleNoteMainTitle = (e) => {
    setNoteMainTitle(e.target.value);
  };

  const [noteSubTitle, setNoteSubTitle] = useState("");

  const handleNoteSubTitle = (e) => {
    setNoteSubTitle(e.target.value);
  };

  // got the description of the note

  const [noteDescription, setNoteDescription] = useState("");

  const handleNoteDescription = (e) => {
    setNoteDescription(e.target.value);
  };

  // submission of the note

  const [notes, setNotes] = useState([]);

  const handleNoteSubmission = (e) => {
    e.preventDefault();
    setNotes([...notes, { noteMainTitle, noteSubTitle, noteDescription }]);
    setNoteMainTitle("");
    setNoteSubTitle("");
    setNoteDescription("");
  };

  // clear all the notes

  const handleClearNotes = () => {
    setNotes("");
  };

  return (
    <Fragment>
      <NavBar
        showModalFunction={showModal}
        noteClearanceFunction={handleClearNotes}
      />
      <FormModal
        // modal props
        closeModalFunction={closeModal}
        showStatement={show}
        // input function props
        noteMainTitleFunction={handleNoteMainTitle}
        noteSubTitleFunction={handleNoteSubTitle}
        noteDescriptionFunction={handleNoteDescription}
        // input value props
        noteMainTitleValue={noteMainTitle}
        noteSubTitleValue={noteSubTitle}
        noteDescriptionValue={noteDescription}
        // note submission prop
        noteSubmissionFunction={handleNoteSubmission}
      />
      <Board notesData={notes} />
    </Fragment>
  );
}

export default App;
