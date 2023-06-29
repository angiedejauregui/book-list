import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Books } from "./Books";

export const CrudTable = ({ books, setEditData, deleteBook, setBooks }) => {
  const handleDragEnd = (event) => {
    const {active, over} = event

    setBooks((book) => {
      const oldIndex = books.findIndex(book => book.id === active.id)
      const newIndex = books.findIndex(book => book.id === over.id)
      return arrayMove(books, oldIndex, newIndex)
    })
    };
    

  return (
    <TableContainer>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} >
          <table border="1" className="table container table-dark table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <SortableContext
                items={books}
                strategy={verticalListSortingStrategy}
              >
                {books.length == 0 ? (
                <tr>You don't have any book</tr>
              ) : (
                books.map((book, index) => (
                  <Books index={index} book={book} setEditData={setEditData} deleteBook={deleteBook}/>
                )))}
              </SortableContext>
            </tbody>
          </table>
      </DndContext>
    </TableContainer>
  );
};

const TableContainer = styled.div`
`;
