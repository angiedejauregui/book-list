import React, { useState, useEffect } from "react";
import Entry from "./Entry";
import { nanoid } from "nanoid";

const Home = () => {
  // const [entries, setEntries] = useState(() => {
  //     const storedEntries = JSON.parse(localStorage.getItem('entries'));
  //     return storedEntries || {};
  //   });
  //   const [entryCount, setEntryCount] = useState(Object.keys(entries).length + 1);

  //   useEffect(() => {
  //     localStorage.setItem('entries', JSON.stringify(entries));
  //   }, [entries]);

  //   const addEntry = () => {
  //     const newEntryId = `entry_${entryCount}`;
  //     const newEntry = {
  //       id: newEntryId,
  //       name: `Entry ${entryCount}`,
  //       content: ''
  //     };
  //     setEntries(prevEntries => ({
  //       ...prevEntries,
  //       [newEntryId]: newEntry
  //     }));
  //     setEntryCount(prevCount => prevCount + 1);
  //   };

  //   const deleteEntry = (entryId) => {
  //     const updatedEntries = { ...entries };
  //     delete updatedEntries[entryId];
  //     setEntries(updatedEntries);
  //   };

  //   const editEntry = (entryId, newContent) => {
  //     const updatedEntries = { ...entries };
  //     updatedEntries[entryId].content = newContent;
  //     setEntries(updatedEntries);
  //   };

  //   return (
  //     <div>
  //       <h1>Daily Journal</h1>
  //       <button onClick={addEntry}>Add Entry</button>
  //       <ul>
  //         {Object.values(entries).map(entry => (
  //           <li key={entry.id}>
  //             <h3>{entry.name}</h3>
  //             <textarea
  //               value={entry.content}
  //               onChange={(e) => editEntry(entry.id, e.target.value)}
  //               placeholder="Enter your entry"
  //             ></textarea>
  //             <button onClick={() => deleteEntry(entry.id)}>Delete</button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState([]);
  const [addFormData, setAddFormData] = useState({
    title: "",
    author: "",
  });

  const titles = [];

  useEffect(() => {
    localStorage.getItem("title", JSON.stringify(title));
    localStorage.getItem("author", JSON.stringify(author));
  }, [title, author]);

  // const handleAddFormChange = (event) => {
  //   //event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...addFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setAddFormData(newFormData);
  //   //titles.push(value)
  //   // const books = [
  //   //   {
  //   //     "title": [],
  //   //     "author": [value]
  //   //   }
  //   // ]
  //   // setTitle([...title, books])
  // };

  const handleAddFormSubmit = (event) => {
    //event.preventDefault();

    const newBook = {
      id: nanoid(),
      title: title,
      author: author,
    };

    const newBooks = [...books, newBook];
    setBooks(newBooks);
  };

  return (
    <div className="m-4">
      <h1>Book List</h1>
      <form
        onSubmit={() => handleAddFormSubmit}
        className="d-flex m-5 align-items-center justify-content-center gap-4 bg-light p-3 rounded-3 border"
      >
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Ingrese un libro"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="">
          Author
        </label>
        <input
          type="text"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="btn btn-secondary">
          Add
        </button>
      </form>
      <table className="mx-auto border">
        <thead>
          <tr className="bg-light border">
            <th className="p-3">Title</th>
            <th className="p-3">Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
          <tr>
            <td>hooal</td>
            <td>hola</td>
          </tr>
        </tbody>
      </table>
      <div>{books}</div>
    </div>
  );
};

export default Home;
