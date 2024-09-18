import { useState } from "react";

const Form = (props) => {
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.moviesearch(formData.searchterm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchterm"
        value={formData.searchterm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;