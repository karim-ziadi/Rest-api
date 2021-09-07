import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddEditContact.css";
import { useDispatch, useSelector } from "react-redux";
import {
	addContact,
	editContact,
} from "../../redux/contactActions/contactActions";

export const AddEditContact = ({ history }) => {
	const [user, setUser] = useState({ name: " ", email: " ", phone: 0 });

	//handellchange
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const dispatch = useDispatch();
	//recuperer var from store
	const edit = useSelector((state) => state.contactReducer.isEdit);
	const userReducer = useSelector((state) => state.contactReducer.user);

	useEffect(() => {
		edit ? setUser(userReducer) : setUser({ name: " ", email: " ", phone: 0 });
	}, [edit, userReducer]);

	return (
		<div>
			<Form className='formAdd'>
				<Form.Group className='formBasicName'>
					<Form.Control
						type='text'
						placeholder='Enter name'
						name='name'
						value={user.name || " "}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className='formBasicEmail'>
					<Form.Control
						type='email'
						placeholder='Enter email'
						name='email'
						value={user.email || " "}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className='formBasicPhoneNumber'>
					<Form.Control
						type='text'
						placeholder='Enter Phone Number'
						name='phone'
						value={user.phone || 0}
						onChange={handleChange}
					/>
				</Form.Group>
				{edit ? (
					<Button
						variant='outline-success'
						onClick={() => {
							dispatch(editContact(userReducer._id, user));
							console.log(userReducer._id);
							history.push("/");
						}}
					>
						Edit Contact
					</Button>
				) : (
					<Button
						variant='outline-primary'
						onClick={() => {
							dispatch(addContact(user));
							history.push("/");
						}}
					>
						Add Contact
					</Button>
				)}
			</Form>
		</div>
	);
};

export default AddEditContact;
