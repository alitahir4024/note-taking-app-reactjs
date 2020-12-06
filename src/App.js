import { Fragment, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import FormModal from "./components/formModal";
import SearchModal from "./components/searchModal";
import Board from "./components/Board";

function App() {
  // show and hide implementations on form modal

  const [showFormModal, setShowFormModal] = useState(false);

  const openFormModal = () => {
    setShowFormModal(true);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
  };

  // show and hide implementation on search modal

  const [showSearchModal, setShowSearchModal] = useState(false);

  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
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

  // searching the notes

  const [searchNoteQuery, setSearchNoteQuery] = useState("");

  const handleNoteSearchFunction = (e) => {
    setSearchNoteQuery(e.target.value);
  };

  const handleSearchFunction = (e) => {
    e.preventDefault();
    const searchedNotes = notes.filter((obj) => {
      return obj.noteMainTitle.includes(searchNoteQuery);
    });
    setNotes(searchedNotes);
    console.log(searchedNotes);
  };

  return (
    <Fragment>
      <NavBar
        // open modals functions props
        showFormModalFunction={openFormModal}
        showSearchModalFunction={openSearchModal}
        noteClearanceFunction={handleClearNotes}
      />
      <FormModal
        // modal props
        noteModalShowStatement={showFormModal}
        closeFormModalFunction={closeFormModal}
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
      <SearchModal
        // modal props
        searchModalShowStatement={showSearchModal}
        closeSearchModalFunction={closeSearchModal}
        // note search props
        noteSearchFunction={handleSearchFunction}
        searchQueryValue={searchNoteQuery}
        noteSearchQueryFunction={handleNoteSearchFunction}
      />
      <Board notesData={notes} />
    </Fragment>
  );
}

export default App;
