import React, { useState, useEffect } from 'react'

function Entry({ entry, addEntry, setEntries, entries }) {
    const [journal, setJournal] = useState(false);
    const [text, setText] = useState(window.localStorage.getItem("text"));
  
    const setLocalStorage = (value) => {
      try {
        setText(value);
        window.localStorage.setItem("text", value);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div
        className="border d-flex justify-content-between align-items-center m-1 px-4"
        onClick={() => {
          addEntry(text); // Llama a la función addEntry y pasa la entrada actual
          setJournal(true);
        }}
        journal={journal}
      >
        <textarea
          onChange={(e) => setLocalStorage(e.target.value)}
          value={text}
          placeholder="Daily journal"
        ></textarea>
        <span onClick={() => setEntries(entries.pop())}>Delete</span>
      </div>
    );
  }
  
  export default Entry;