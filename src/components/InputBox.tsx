import { useState } from "react";

interface InputBoxProps {
  history: string[];
  setHistory: (data: string[]) => void;
}

export default function InputBox(props: InputBoxProps) {
  const [textbox, setTextbox] = useState("");

  /**
   * Handles the submit button being clicked or the enter key being pressed!
   * You may want to make this function more sophisticated to add real
   * command logic, but for now it just adds the text to the history box.
   */
  function handleSubmit() {
    props.setHistory([...props.history, textbox]);
    setTextbox("");
  }

  return (
    <div className="repl-input">
      {/* The text box, which keeps its contents synced with the textbox state */}
      <input
        type="text"
        className="repl-command-box"
        onChange={(e) => setTextbox(e.target.value)}
        value={textbox}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      {/* The submit button, which calls handleSubmit when clicked */}
      <button className="repl-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}