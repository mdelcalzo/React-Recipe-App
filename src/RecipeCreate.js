import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const [name, setName] = useState("Name");
  const handleNameChange = (event) => setName(event.target.value);
  const [cuisine, setCuisine] = useState("Cuisine");
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const [photo, setPhoto] = useState("URL");
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const [ingredients, setIngredients] = useState("Ingredients");
  const handleIngredientChange = (event) => setIngredients(event.target.value); 
  const [preparation, setPreparation] = useState("Preparation");
  const handlePreparationChange = (event) => setPreparation(event.target.value);
  

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("Name");
    setCuisine("Cuisine");
    setPhoto("URL");
    setIngredients("Ingredients");
    setPreparation("Preparation");
  };
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                id="name"
                name="name"
                type="text"
                onChange={handleNameChange}
                value={name}
              />
            </td>
            <td>
              <input 
                id="cuisine"
                name="cuisine"
                type="text"
                onChange={handleCuisineChange}
                value={cuisine}
              />
            </td>
            <td>
              <input 
                id="photo"
                name="photo"
                type="text"
                onChange={handlePhotoChange}
                value={photo}
              />
            </td>
            <td>
              <textarea 
                id="ingredients"
                name="ingredients"
                type="text"
                rows={2}
                onChange={handleIngredientChange}
                value={ingredients}
              />
            </td>
            <td>
              <textarea 
                id="preparation"
                name="preparation"
                type="text"
                rows={2}
                onChange={handlePreparationChange}
                value={preparation}
              />                    
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
