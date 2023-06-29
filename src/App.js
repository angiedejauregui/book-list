import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { CrudApp } from './components/CrudApp';
import 'bootstrap/dist/css/bootstrap.min.css'; // no puedo cambiar el color de la table
import Container from 'react-bootstrap/Container';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <CrudApp />
    </div>
  );
}

export default App;
