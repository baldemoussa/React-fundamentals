import { useState } from 'react';
import {people as data} from './data/people';
import PeopleList from './components/PeopleList';
import SingleStateForm from './components/SingleStateForm';

function App(){

    const [people, setPeople] = useState(data);
    // console.log(people);
    
    return(
        <div>
            <h1>React Fundamentals</h1>
            <PeopleList people={people} />
            <SingleStateForm />
        </div>
    );
}

export default App