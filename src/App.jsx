import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";


const Forms = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);


  return (
    <Container>
        <h1>Form</h1>
   <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <br />
        <input name="name" {...register('name')} />
      </div>
      <br />
      <div>
        <label>college</label>
        <input type="college" name="college" {...register('college')} />
      </div>
      <br />
      <div>
        <label>year of study</label>
        <input type="number" name="number" {...register('year')} />
      </div>
      <button>Submit</button>
    </form>
    </Container>
 
  );
};
export default Forms;