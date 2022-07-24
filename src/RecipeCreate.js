import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  /*
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
  */

  const recipe = { name: "", 
  cuisine: "", 
  photo: "", 
  ingredients: "", 
  preparation: "", 
 };

const [formData, setFormData] = useState({ ...recipe });

const handleChange = ({ target }) => { 
setFormData({ ...formData, [target.name]: target.value }); 
};

const handleSubmit = (event) => { 
event.preventDefault(); 
createRecipe(formData); 
setFormData({ ...recipe });     
}; 

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  /*
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("Name");
    setCuisine("Cuisine");
    setPhoto("URL");
    setIngredients("Ingredients");
    setPreparation("Preparation");
  };
  */

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
                required={true} 
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <input 
                id="cuisine"
                name="cuisine"
                type="text"
                required={true} 
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input 
                id="photo"
                name="photo"
                type="text"
                required={true} 
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td>
              <textarea 
                id="ingredients"
                name="ingredients"
                type="text"
                required={true} 
                rows={2}
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea 
                id="preparation"
                name="preparation"
                type="text"
                required={true} 
                rows={2}
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
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
