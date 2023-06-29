import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { FaStar } from "react-icons/fa";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";

export const Books = ({ book, setEditData, deleteBook, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: book.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <tr style={style} ref={setNodeRef} {...attributes} {...listeners} key={index} id="book">
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.status}</td>
        <td>
          {[...new Array(5)].map((star, index) => {
            return index <= book.rating ? (
              <FaStar className="text-warning" />
            ) : (
              <FaStar />
            );
          })}
        </td>
        <td>
          <button
            className="btn btn-warning mx-1"
            onMouseDown={() => setEditData(book)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger mx-1"
            onMouseDown={() => deleteBook(book.id, book.title)}
          >
            Delate
          </button>
        </td>
      </tr>
    </>
  );
};
const BookContainer = styled.div`
  background-color: #f4f4e7;
`