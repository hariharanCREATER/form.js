import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [skills, setSkills] = useState("");
  const [passedOutYear, setPassedOutYear] = useState("");
  const [degree, setDegree] = useState("");

  function Submit(e) {
    e.preventDefault(); 
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwsI1E7ZwScxeZB7bKnJVQ4g9jDsjISeVs2RApYnjyKOHyxCYFchzyjxw9QsOC91f0Q/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>CAREER PORTAL</h1>
      <h2>WELCOME YOU FOR OUR CAREER PORTAL</h2>
      <div>
        <form className="form" onSubmit={Submit}>
          <input
            placeholder="Your Name"
            name="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Your Email"
            name="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="phone_number"
            name="ph_number"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="radio-label">
            <input
              type="radio"
              value="male"
              name="gender"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />Male
          </div>
          <div className="radio-label">
            <input
              type="radio"
              value="female"
              name="gender"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />Female
          </div>
          <div className="radio-label">
            <input
              type="radio"
              value="others"
              name="gender"
              checked={gender === "others"}
              onChange={(e) => setGender(e.target.value)}
            />Others
          </div>

          <input
            placeholder="Address"
            name="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            placeholder="skills"
            name="skills"
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <input
            placeholder="passed out year"
            name="passed out year"
            type="text"
            value={passedOutYear}
            onChange={(e) => setPassedOutYear(e.target.value)}
          />
          <input
            placeholder="degree"
            name="degree"
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <input name="upload resume" type="file" />
          <input name="submit" type="submit" />
        </form>
      </div>
    </div>
  );
}
