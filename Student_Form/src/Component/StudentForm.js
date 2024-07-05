import { useState } from "react";

const INTIALIZE = {
  name: "",
  email: "",
  pass: "",
  zender: "",
  Level: "",
};

function StudentForm(e) {
  const [formData, setFormData] = useState(INTIALIZE);

  const { name, email, pass, Level,  zender } = formData;

  function handleclick(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={name}
        onChange={handleclick}
        placeholder="enter your name"
        name="name"
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleclick}
        placeholder="enter your email"
      />
      <br />
      <br />
      <input
        type="password"
        name="pass"
        value={pass}
        onChange={handleclick}
        placeholder="enter your Password"
      />
      <br />
      <br />
      <select value={Level} onChange={handleclick} name="Level" id="">
        <option value="Freshman">Freshman</option>
        <option value="Sophomore">Junior</option>
        <option value="Senior">Senior</option>
      </select>
      <br />
      <br />
      MALE{" "}
      <input type="radio" name="zender" value={"Male"} onChange={handleclick} />
      Female{" "}
      <input
        type="radio"
        value={"Female"}
        onChange={handleclick}
        name="zender"
      />
     
      <br />
      <br />
      <input type="submit" />
    </form>
  );
}

export default StudentForm;
