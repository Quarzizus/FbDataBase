import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "firebase/database";

const Card = () => {
  const db = firebase.database();
  const [userData, setUserData] = useState({
    nombre: "",
    edad: null,
    carrera: "",
  });
  const [lengthUsers, setLengthUser] = useState(null);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    db.ref("users/" + lengthUsers).set(userData);
  };

  useEffect(async () => {
    const response = await db.ref().child("users").get();
    setLengthUser(response.val().length);
  }, []);

  return (
    <section>
      <input
        type="text"
        name="nombre"
        placeholder="nombre"
        onChange={handleChange}
      />
      <input
        min="0"
        type="number"
        name="edad"
        placeholder="edad"
        onChange={handleChange}
      />
      <input
        type="text"
        name="carrera"
        placeholder="carrera"
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>
        Agregar
      </button>
    </section>
  );
};

export default Card;
