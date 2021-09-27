import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");

  const getUser = async () => {
    try {
      const { data } = await Axios.get("https://randomuser.me/api/");
      console.log(data.results[0]);
      const d = data.results[0];
      setDetails(d);
      setFirst(d.name["first"]);
      setLast(d.name["last"]);
      setTitle(d.name["title"]);
      setGender(d.gender);
      setImage(d.picture["large"]);
      setEmail(d.email);
      console.log("lavesh", d.gender);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              Let Us Grow More
            </a>

            <button title="clickme" onClick={() => getUser()}>
              Click Here to get a new User
            </button>
          </div>
        </div>
      </nav>

      <div class="container">
        <h3>Random User Details</h3>

        <p>
          name -- {title} {first} {last}
        </p>
        <p>gender -- {gender}</p>

        <p>email -- {email}</p>
        <img src={image}></img>
      </div>
    </>
  );
}

export default App;
