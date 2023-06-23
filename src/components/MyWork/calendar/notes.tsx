import React, { useEffect, useState } from "react";
import moment from "moment";
const Notes = (props: { date: any }) => {
  const { date } = props;
  let refParagraph = React.createRef();
  const [notes, setNotes] = useState<any>(new Map());
  const [text, setText] = useState("");
  const [initialText, setInitialText] = useState("");
  const handleOnOk = () => {
    let dateAsKey = moment(date).format("DDMMyyyy");
    let dateTextMap = new Map();
    dateTextMap = { ...dateTextMap, [dateAsKey]: text };
    setNotes({ ...notes, ...dateTextMap });
  };
  useEffect(() => {
    let key = moment(date).format("DDMMyyyy");
    let textFromDateNotes = "";
    textFromDateNotes = notes && notes[key];
    setText(textFromDateNotes || "");
  }, [date, notes]);

  return (
    <div className="notes-wrapper ">
      <div className="dateinnotes">
        {new Date(date).toLocaleString("en-us", { weekday: "long" }) +
          " " +
          new Date(date).getDate()}
      </div>
      <div>
        <textarea
          className="notes"
          value={text}
          style={{ resize: "none", width: "100%" }}
          onChange={(e) => setText(e.target.value)}
        />
        {/* <div
          ref={refParagraph}
          className="notes"
          onInput={(e) => setText(e.currentTarget.textContent)}
          contentEditable
        >
          {initialText}
        </div>
        <pre>{text}</pre> */}
      </div>
      {text && text !== "" && (
        <div style={{ display: "flex", justifyContent: "end", margin: " 5px" }}>
          <button
            style={{ padding: "10px" }}
            onClick={() => {
              handleOnOk();
            }}
          >
            ok
          </button>
        </div>
      )}
    </div>
  );
};

export default Notes;
