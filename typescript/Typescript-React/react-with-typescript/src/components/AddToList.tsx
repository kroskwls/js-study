import React, { useState } from "react";
import { IState, People } from "../types/IState";

interface IProps {
	people: IState["people"];
	setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
	const [input, setInput] = useState<People>({
		name: "",
		age: NaN,
		url: "",
		note: ""
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	};

	const handleClick = (): void => {
		if (
			!input.name || 
			!input.age ||
			!input.url
		) {
			return ;
		}

		setPeople([
			...people,
			{
				name: input.name,
				age: input.age,
				url: input.url,
				note: input.note
			}
		]);

		setInput({
			name: "",
			age: NaN,
			url: "",
			note: ""
		});
	};

	return (
		<div className="AddToList">
			<input 
				type="text" 
				placeholder="Name" 
				className="AddToList-input" 
				value={input.name} 
				onChange={handleChange} 
				name="name"
			/>
			<input 
				type="number" 
				placeholder="Age" 
				className="AddToList-input" 
				value={input.age} 
				onChange={handleChange} 
				name="age"
			/>
			<input 
				type="text" 
				placeholder="Image Url" 
				className="AddToList-input" 
				value={input.url} 
				onChange={handleChange} 
				name="url"
			/>
			<textarea 
				placeholder="Notes" 
				className="AddToList-input" 
				value={input.note} 
				onChange={handleChange} 
				name="note"
			/>
			<button
				className="AddToList-btn"
				onClick={handleClick}
			>
				Add To List
			</button>
		</div>
	);
};

export default AddToList;