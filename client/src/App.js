import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddEditContact from "./Components/AddEditContact/AddEditContact";
import ContactList from "./Components/ContactList/ContactList";
import Home from "./Components/Home/Home";

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Home />
				<Switch>
					<Route path='/' exact component={ContactList} />
					<Route path={['/addContact', '/editContact']} exact component={AddEditContact} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
