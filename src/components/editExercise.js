import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchData from '../axios/axios';
import './createexercise.css';

const Editexercise = () => {
    const navigate = useNavigate('');

    const inicialValue = {username: '', description: '', duration: 0, date: new Date()};
    const [exerciseData, SetExerciseData ] =  useState(inicialValue); 
    const {username, description, duration, date } = exerciseData;
    const [users, setUsers] = useState([]);

    useEffect( ()=>{

        (async () => {
            const {data} =  await fetchData.get('/user/users/');
            setUsers(data.users.map((user)=>user.username));
         })();

    }, []);

    const handleChangeInput = e =>{
         const {name , value } = e.target;
         SetExerciseData({...exerciseData, [name]:value});
    }

    const handleSubmit = async(e) => {
         e.preventDefault()
         
         await fetchData.post('/exercise/add', exerciseData);
         SetExerciseData(inicialValue);
         navigate('/');
    }

    return (
        <div className='createexercise_content'>
        <form className='createexercise_form' onSubmit={handleSubmit} method='SET'>   
        <h2>Create new Exercise</h2>   
            <div className='createexercise_div'>
                <label>
                        Username: 
                </label>
                <br/>
                <select 
                    value={username}
                    name= 'username'
                    onChange={handleChangeInput}
                >
                 { users.map(user =>{
                    return <option 
                    key={user}
                    value={user} 
                    >
                        {user}
                    </option>})
                }
                </select>
            </div>

            <div className='createexercise_div'>
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
            <div className='createexercise_div'>
                <label>
                        Duration (min): 
                </label>
                <br/>
                <input
                        type='text'
                        value={duration}
                        name= 'duration'
                        onChange={handleChangeInput}
                />
            </div>
            <div className='createexercise_date'>
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
            <div className='createexercise_div_button'>
                <input value='Edite exercise' type="submit"/>
            </div>
        </form>
        </div>
    );
}

export default Editexercise;
