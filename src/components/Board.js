const Board = ({ notesData }) => {
  return (
    <main className="Board">
      {notesData.map((noteObj, noteIndex) => {
        return (
          <div className="note" key={noteIndex}>
            <div className="note-text">
              <h1>{noteObj.noteMainTitle}</h1>
              <h3>{noteObj.noteSubTitle}</h3>
              <p>{noteObj.noteDescription}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Board;
