import './App.css';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import { Row } from 'antd';

function App() {
  return (
    <div className="container">
      <AddFoodForm />
      <h1 className="title">Food list</h1>
      <Row>
        <FoodBox />
      </Row>
    </div>
  );
}

export default App;
