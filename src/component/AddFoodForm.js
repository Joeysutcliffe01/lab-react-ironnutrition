import { useState } from 'react';
import foods from '../foods.json';
import { Divider, Input } from 'antd';

function AddFoodForm() {
  const [foodForm, setCharacterForm] = useState(foods);

  const handleFormUpdate = (fieldName) => (event) => {
    const newState = { ...foodForm, [fieldName]: event.target.value };
    setCharacterForm(newState);
  };

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={foodForm.name}
        type="text"
        onChange={handleFormUpdate('Name')}
      />

      <label>Image</label>
      <Input
        value={foodForm.image}
        type="text"
        onChange={handleFormUpdate('Image')}
      />

      <label>Calories</label>
      <Input
        value={foodForm.calories}
        type="text"
        onChange={handleFormUpdate('Calories')}
      />

      <label>Servings</label>
      <Input
        value={foodForm.servings}
        type="number"
        onChange={handleFormUpdate('Servings')}
      />

      <button type="submit" onClick={}>
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
