import React from 'react';
import { useState } from "react";
import { getDatabase, ref, push as firebasePush } from 'firebase/database';

// build user log in 
function FormComponents(props) {
  // Peronsal Info
  const [typedFNameInput, setTypedFNameInput] = useState("");
  const [typedLNameInput, setTypedLNameInput] = useState("");
  const [typedEmailInput, setTypedEmailInput] = useState("business@email.com");
    const [typedPhoneInput, setTypedPhoneInput] = useState("000-000-0000");


    const handleFNameChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedFNameInput(value);
    }

    const handleLNameChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedLNameInput(value);
    }

    const handleEmailChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedEmailInput(value);
    }

    const handlePhoneChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedPhoneInput(value);
    }


    // Business Info
    const [typedBizNameInput, setTypedBizNameInput] = useState("");
    const [typedBizDescInput, setTypedBizDescInput] = useState("Tell us about your business");
    const [typedBizTypeInput, setTtypedBizTypeInput] = useState("");
    const [typedBizLocInput, setTypedBizLocInput] = useState("");

    // new questions on tags, expenses, and upload images
    const [chosenTagInput, setChosenTagInput] = useState("");
    // select from the list, as check boxes or select element (drop down list)
    //  handling changes - array of values 
    // build up html first, then react

    const [chosenExpenseInput, setChosenExpenseInput] = useState("");
    const [imageInput, setImageInput] = useState("Select"); // from lecture

    const handleBizNameChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedBizNameInput(value);
    }

    const handleBizDescChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedBizDescInput(value);
    }

    const handleBizTypeClick = (event) => {
        const value = event.target.value;
        setTtypedBizTypeInput(value);
    }

    const handleChosenExpense = (event) => {
        const value = event.target.value;
        setChosenExpenseInput(value);
    }

    const handleBizLocClick = (event) => {
        const value = event.target.value;
        setTypedBizLocInput(value);
    }

    const handleUploadedImg = (event) => {
        const value = event.target.value;
        setImageInput(value);
    }

    const handleSelectedTags = (event) => {
        const values = event.target.values;
        setChosenTagInput(values);
    }

    const handleSubmit = (event) => {
        setTypedFNameInput("");
        setTypedLNameInput("");
        setTypedEmailInput("");
        setTypedPhoneInput("");
        setTypedBizNameInput("")
        setTypedBizDescInput("");
        setTtypedBizTypeInput("");
        setTypedBizLocInput("");
        setChosenTagInput("");
        setChosenExpenseInput("");
        setImageInput("");
        // call all set to reset everything questions
        // create new obj = all the state variables
        // take all state variables
        // object.typedBizNameInput = typedBizNameInput
        // Const myObj = { bizName : bizName, bizThing : bizThng }
        // firebasePush 
        // check lecture code for adding new messages
    }

    return (
        <div>
            <div className='formquestion mb-3'>
                <label>First name: </label>
                <input
                    type='text'
                    value={typedFNameInput}
                    onChange={handleFNameChange}
                    required
                />
            </div>
            <div className='formquestion'>
                <label>Last name:</label>
                <input
                    type='text'
                    value={typedLNameInput}
                    onChange={handleLNameChange}
                    required
                />
            </div>
            <div className='formquestion'>
                <label>Email: </label>
                <input
                    type='email'
                    value={typedEmailInput}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div className='formquestion'>
                <label>Phone number: </label>
                <input
                    type="tel"
                    value={typedPhoneInput}
                    onChange={handlePhoneChange}
                    required
                />
            </div>
            <div className='formquestion'>
                <label>Business name: </label>
                <input
                    type="text"
                    value={typedBizNameInput}
                    onChange={handleBizNameChange}
                    required
                />
            </div>

            <div className='formquestion col-auto'>
                <label> Business Type: </label>
                <select className="form-select" value={typedBizTypeInput} onChange={handleBizTypeClick} >
                    <option value="hotel">Hotel</option>
                    <option value="dining">Dining</option>
                    <option value="activity">Activity</option>
                </select>
            </div>

            {/* CONDITIONAL RENDERING: outside of return statement, if statement infront of return statment,
            array of options, individual conditional rendering on options */}
            <div className='formquestion col-auto'>
                <label> Price: </label>
                <select className="form-select" value={chosenExpenseInput} onChange={handleChosenExpense} >
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                </select>
            </div>

            <div className='formquestion col-auto'>
                <label> Tags: </label>
                <select multiple className="form-select" value={chosenTagInput} onChange={handleSelectedTags} >
                    <option value="Free Wi-Fi">Free Wi-Fi</option>
                    <option value="Air conditioning">Air conditioning</option>
                    <option value="Beach access">Beach access</option>
                    <option value="Free parking">Free parking</option>
                    <option value="Outdoor pool">Outdoor pool</option>
                    <option value="Free breakfast">Free breakfast</option>
                    <option value="Airport shuttle">Airport shuttle</option>
                    <option value="Kid-friendly">Kid-friendly</option>
                    <option value="Fitness center">Fitness center</option>
                    <option value="Beach front">Beach front</option>
                    <option value="Kitchen in rooms">Kitchen in rooms</option>
                    <option value="Bar">Bar</option>
                    <option value="Oceanfront">Oceanfront</option>
                    <option value="Luau">Luau</option>
                    <option value="Live Music">Live Music</option>
                    <option value="Culture">Culture</option>

                    <option value="Bar">Bar</option>


                </select>
            </div>




            <div className='formquestion col-auto'>
                <label> Business Location:   </label>
                <select id='businessLoc' className="form-select" value={typedBizLocInput} onChange={handleBizLocClick} >
                    <option value="Maui">Maui</option>
                    <option value="Hawaiʻi">Hawaiʻi</option>
                    <option value="Oahu">Oahu</option>
                    <option value="Molokai">Molokai</option>
                    <option value="Lāna‘i">Lāna‘i</option>
                    <option value="Kaua'i">Kaua'i</option>
                </select>
            </div>

            <div className='formquestion'>
                <label>Business description:
                    <textarea className="form-control"
                        value={typedBizDescInput}
                        onChange={handleBizDescChange}
                        required>
                    </textarea>
                </label>
            </div>
            <button className="formquestion btn btn-primary"
                type="button" onClick={handleSubmit}>Submit form

            </button>
        </div>

    )
}


export function FormPage(props) {

    // const handleSubmit = (event) => {
    //     props.addBusinessCallback(typedInput);
    // }  

    return (
        <div>
            <header>
                <h1>FORM</h1>
            </header>
            <form>
                <div className="input-group">
                    <FormComponents />
                </div>
            </form>
        </div>
    )
}
