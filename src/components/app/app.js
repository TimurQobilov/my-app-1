import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddFrom from '../employers-add-from/employers-add-from';

import './app.css';

function App() {

    const data = [
        {name: 'Timur Qobilov', salary: 800, increase: false},
        {name: 'Timur Qobilov', salary: 900, increase: true},
        {name: 'Timur Qobilov', salary: 1000, increase: false},
        
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployersAddFrom/>
        </div>
    );
}

export default App;