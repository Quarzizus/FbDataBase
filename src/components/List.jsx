import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/database";

const List = () => {
  const db = firebase.database();
  const [users, setUsers] = useState({});

  const getDataFirebase = async () => {
    const response = await db.ref().child("users").get();
    setUsers(response.val());
  };

  const getDataOn = async () => {
    db.ref("users").on("value", (snapshot) => {
      setUsers(snapshot.val());
    });
  };

  const updateUser = async (id) => {
    const userUpdate = {
      nombre: "Editado",
    };
    db.ref()
      .child("users/" + id)
      .update(userUpdate);
  };

  const removeUser = async (id) => {
    db.ref()
      .child("users/" + id)
      .remove();
  };

  useEffect(() => {
    getDataOn();
  }, []);

  if (!users) {
    <h1>Cargando...</h1>;
  } else {
    return (
      <section className="List">
        {Object.entries(users).map(([key, value]) => {
          return (
            <ul key={key}>
              <li>{value.nombre}</li>
              <li>{value.edad}</li>
              <li>{value.carrera}</li>
              <div>
                <button onClick={() => updateUser(key)}>Edit</button>
                <button onClick={() => removeUser(key)}>Delete</button>
              </div>
            </ul>
          );
        })}
      </section>
    );
  }
};

export default List;
