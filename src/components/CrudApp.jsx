import React, { useEffect, useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import styled from "styled-components";
import { CrudCont } from "./CrudCont";


export const CrudApp = () => {
  const [counters, setCounters] = useState({
    Finished: 0,
    Reading: 0,
    toRead: 0,
  });
  const [editData, setEditData] = useState(null);
  const [books, setBooks] = useState(() => {
    const saveBooks = window.localStorage.getItem("booksData");
    if (saveBooks) {
      return JSON.parse(saveBooks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("booksData", JSON.stringify(books));
    updateCounters();
  }, [books]);

  const updateCounters = () => {
    const updatedCounters = {
      Finished: 0,
      Reading: 0,
      toRead: 0,
    };
    books.forEach((book) => {
      updatedCounters[book.status]++;
    });
    setCounters(updatedCounters);
  };

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const editBook = (book) => {
    const newBooks = books.map((el) => (el.id === book.id ? book : el));
    setBooks(newBooks);
    setEditData(null);
    console.log(newBooks);
  };

  const deleteBook = (id, title) => {
    const isDelete = window.confirm(
      "Do you want to delete: " + `${title}` + "?"
    );
    if (isDelete) {
      const newBooks = books.filter((el) => el.id !== id);
      setBooks(newBooks);
    }
  };

  return (
    <AppContainer>
      <CrudCont
        books={books}
        counters={counters}
      />
      <h2>Book List</h2>
      <CrudForm addBook={addBook} editData={editData} editBook={editBook} />
      <CrudTable
        books={books}
        setEditData={setEditData}
        deleteBook={deleteBook}
        setBooks={setBooks}
      />
    </AppContainer>
  );
};

const AppContainer = styled.div`
background-color: #212529;
h2 {
  font-size: 3rem;
}
`;
