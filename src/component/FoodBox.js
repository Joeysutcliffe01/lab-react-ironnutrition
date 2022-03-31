import { useState } from 'react';
import foods from '../foods.json';
import 'antd/dist/antd.css';
import { Card, Col, Button } from 'antd';

function FoodBox() {
  const [allFoods, setAllFoods] = useState(foods);

  const deleteFood = (FoodToFind) => {
    setAllFoods((oldFoods) => {
      return oldFoods.filter((food) => food.name !== FoodToFind.name);
    });
  };

  return (
    <>
      {allFoods.map((food) => {
        return (
          <Col>
            <Card
              title={food.name}
              style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={food.image} height={75} alt={food.name} />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>Total Calories: ({food.calories * food.servings}) </b> kcal
              </p>
              <Button type="primary" onClick={() => deleteFood(food)}>
                {' '}
                Delete{' '}
              </Button>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default FoodBox;
