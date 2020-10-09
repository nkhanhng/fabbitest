import { useState } from "react";

export const useForm = () => {
  const [inputs, setInputs] = useState({
    meal: "",
    numberPeople: "",
    restaurant: "",
    dish: []
  });
  const [error, setError] = useState(false);
  console.log(error)
  const change = (event) => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    change,
    inputs,
    error,
    setError
  };
};
