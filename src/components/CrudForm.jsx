import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export const CrudForm = ({ addBook, editData, editBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    id: null,
    rating: null,
    status: "",
  });

  useEffect(() => {
    console.log(editData);
    if (editData !== null) {
      setFormData(editData);
    } else {
      setFormData({
        title: "",
        author: "",
        id: null,
        rating: null,
        status: "",
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleRating = (e) => {
    setFormData({
      ...formData,
      rating: e,
    });
  };

  const handleReset = () => {
    setFormData({
      title: "",
      author: "",
      id: null,
      rating: null,
      status: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se recarge la pagina
    console.log(formData);

    if (formData.title !== "") {
      if (editData !== null) {
        editBook(formData);
      } else {
        formData.id = Date.now();
        addBook(formData);
        setFormData({
          title: "",
          author: "",
          id: null,
          rating: null,
          status: "",
        });
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        status: "", 
      }));
    } else {
      alert("please add a book");
    }
  };

  return (
    <FormContainer>
      <form
        className="m-5 d-flex gap-4 justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="d-flex gap-4"></div>
        <div className="form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            onChange={handleChange}
            value={formData.title}
          />
        </div>
        <div className="form">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Enter the author"
            onChange={handleChange}
            value={formData.author}
          />
        </div>
        <div>
          <p class="form">Status</p>
          <select id="dropdown" name="status" onChange={handleChange} required>
            <option value="">Select status</option>
            <option value="Finished">Finished</option>
            <option value="Reading">Reading</option>
            <option value="toRead">To read</option>
          </select>
        </div>
        <div className="form">
          <label htmlFor="rating">Rating</label>
          <div name="rating">
            {[...new Array(5)].map((star, index) => {
              return index <= formData.rating ? (
                <FaStar
                  key={index}
                  value={index}
                  id="star"
                  className="text-warning"
                  name="rating"
                  onClick={() => {
                    handleRating(index);
                  }}
                />
              ) : (
                <FaStar
                  id="star"
                  key={index}
                  value={index}
                  name="rating"
                  onClick={() => {
                    handleRating(index);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="d-flex mt-4">
          <input
            type="submit"
            value="Send"
            id="button"
            className="btn btn-success mx-1"
          />
          <input
            type="reset"
            value="Cancel"
            id="button"
            className="btn btn-danger mx-1"
            onClick={handleReset}
          />
        </div>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  input {
    width: 10rem;
    height: 2rem;
    border: 1px solid black;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    font-weight: bold;
    font-size: 17px;
  }
  select {
    height: 2rem;
    width: 10rem;
    margin-top: 0px;
  }
  #button {
    height: 2rem;
    width: 5rem;
    line-height: 0;
    margin-top: 1rem;
    border: none;
  }
  #star {
    transition: all 0.3s ease-out;
    cursor: pointer;
  }
`;
