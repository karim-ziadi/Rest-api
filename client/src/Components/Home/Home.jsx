import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import {
	getContacts,
	toggleFalse,
} from "../../redux/contactActions/contactActions";

const Home = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<div>
				<Link to='/'>
					<Button
						className='btnContact'
						variant='outline-primary'
						onClick={() => dispatch(getContacts())}
					>
						Contact List
					</Button>
				</Link>
				<Link to='/addContact'>
					<Button
						className='btnAdd'
						variant='outline-success'
						onClick={() => dispatch(toggleFalse())}
					>
						Add Contact      
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
