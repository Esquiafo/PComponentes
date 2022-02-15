import React, { useRef } from 'react';


export const NewItem = ({ addItem }) => {
  const reference = useRef({});

  const submitForm = (event) => {
    console.log(event)
    event.preventDefault();

    if (reference.current.candidate_name.value.trim() === '') {
      alert('Ingresa datos validos');
    } else {
      addItem(reference.current.candidate_name.value);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <input
        ref={( el) => (el)}
        type="text"
        id="id"
      />
      <br />
      <input type="submit" value="GUARDAR" />
    </form>
  );
};
