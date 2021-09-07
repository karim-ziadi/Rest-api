import React from "react";
import { Card } from "react-bootstrap";
import avatar from "../../Assets/avatar.png";
import editBtn from "../../Assets/edit.png";
import deleteBtn from "../../Assets/delete.png";
import "./ContactCard.css";
import { useDispatch } from "react-redux";
import {
	deleteContact,
	getContact,
	toggleTrue,
} from "../../redux/contactActions/contactActions";
import { Link } from "react-router-dom";
const ContactCard = ({ contact }) => {
	const dispatch = useDispatch();

	return (
		<div>
			<Card bg='info' text='white' style={{ width: "18rem" }}>
				<img src={avatar} alt='avatar' className='avatar' />
				<Card.Body>
					<Card.Title>{contact.name}</Card.Title>
					<Card.Text>{contact.email} </Card.Text>
					<Card.Text>{contact.phone} </Card.Text>
				</Card.Body>
				<div className='delete-edit-btns'>
					<img
						src={deleteBtn}
						alt='delete-icon'
						onClick={() => dispatch(deleteContact(contact._id))}
					/>
					<Link to='/editContact'>
						<img
							src={editBtn}
							alt='edit-icon'
							onClick={() => { dispatch(getContact(contact._id))  ;dispatch(toggleTrue())}} 
						/>
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default ContactCard;
