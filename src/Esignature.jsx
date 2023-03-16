import React, { useState } from "react";
import Title from "./Components/Title";

export default function Esignature() {
  document.body.style.background = "#eee";
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div>
        <Title text={!name ? "Your Name" : name} />
        <Title text={!date ? "DoB" : date} />

        <div className='card d-flex align-items-center '>
          <div className='card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit
            soluta sapiente. Corporis vel soluta, nostrum, libero voluptas
            doloremque nisi tenetur nam quis aperiam odio nihil? Odio, eligendi
            quam facere necessitatibus ab saepe, commodi animi harum accusantium
            dicta nobis illum nostrum tempora dolor incidunt accusamus, rerum
            veritatis fugiat vero eos voluptatem temporibus. Cumque ab similique
            deserunt aut. Quia sunt qui tempore neque, numquam autem officia
            facere accusamus nesciunt ratione rem reiciendis enim in cum fuga,
            temporibus ad rerum eveniet eos impedit. Blanditiis neque quaerat
            commodi fugiat, vitae ipsam sapiente aperiam exercitationem tenetur
            totam reiciendis a! Voluptas distinctio omnis dolorem ipsa!
          </div>
        </div>
        <div className='d-flex p-2 justify-content-evenly'>
          <input type='Date' value={date} onChange={handleDateChange} />
          <input
            type='text'
            value={name}
            placeholder='Enter Your Name'
            onChange={handleNameChange}
          />
        </div>
        <button type='button' class='btn btn-success'>
          Submit
        </button>
      </div>
    </div>
  );
}
