import React from 'react';
// import PizzaImage from '';
import Users from './component/Users';
import {Link, Route} from 'react-router-dom';
import asyCom from './hoc/asyCom'


const asyPizza = asyCom(() => {
    return import ('./component/PizzaImage/PizzaImage')
})
 
const App = () => {
    return (
        <div>
            <div>
                <Link to="/">Users</Link>
                <Link to="/pizza">Pizza</Link>
            </div>
            <div>
                <Route path="/" exact component={Users} />
                <Route path="/pizza" component={asyPizza} />
            </div>
        </div>
    );
};

export default App;