import React, { useState } from 'react';
import './createexercise.css';

const Createexercise = () => {  
    const inicialValue = {name: '', description: '', duration: 0, date: new Date()};
    const [exerciseData, SetExerciseData ] =  useState(inicialValue); 
    const {username, description, duration, date } = exerciseData;
    const user = ['rodrigo', 'Mauro'];

    const handleChangeInput = e =>{
         const {name , value } = e.target;
         SetExerciseData({...exerciseData, [name]:value});
    }

    const handleSubmit = (e) => {
         e.preventDefault()
    }

    return (
        <div className='createexercise_content'>
        <form  onSubmit={handleSubmit} method='GET'>      
            <div >
                <label>
                        Username: 
                </label>
                <br/>
                <select>
                 { user.map(user =>{
                    return <option 
                    key={user}
                    value={user} 
                    >
                        {user}
                    </option>})
                }
                </select>
            </div>

            <div>
                <label>
                        Description: 
                </label>
                <br/>
                <input
                        type='text'
                        value={description}
                        name= 'description'
                        onChange={handleChangeInput}
                />
            </div>
            <div>
                <label>
                        Duration: 
                </label>
                <br/>
                <input
                        type='text'
                        value={duration}
                        name= 'duration'
                        onChange={handleChangeInput}
                />
            </div>
            <div>
                <label>
                        Date: 
                </label>
                <br/>
                <input
                        type='date'
                        value={date}
                        name= 'date'
                        onChange={handleChangeInput}
                />
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
        </div>
    );
}
export default Createexercise;
