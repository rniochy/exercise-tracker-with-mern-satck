import React, {useEffect, useState} from 'react';
import './exerciseList.css'
import fetchData from '../axios/axios'
import { Link } from 'react-router-dom';

const ExerciseList = () => {
    const [users, setUsers] = useState([]); 

    useEffect( ()=>{

        (async () => {
            const {data} =  await fetchData.get('/exercise/');
            setUsers(data.exercises.map((user)=>user));
         })();

    }, []);
  

    const listUserData = (username, description, duration, date, _id)=>{
           return   <div>
            <tr className='exerciseList_table_body'>
                  <td>{username}</td>
                  <td>{description}</td>
                  <td>{duration}</td>
                  <td>{date.substring(0, 10)}</td> 
                  <td> <a><Link to={'/editeexercise/'+_id}> Edite</Link> </a>| <a href='#'>Delete</a></td>
                
            </tr>
            <hr/>
            </div>
          
    }
    return (
        <div className='exerciseList_content'>

            <table  className='exerciseList_table'>
                <thead className='exerciseList_table_head'>
                    <tr className='exerciseList_table_head_row'>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='exerciseList_table_body'>
                    { users.map(user =>  listUserData(user.username, user.description, user.duration, user.date, user._id))}
                </tbody>
            </table>           
        </div>
    );
}

export default ExerciseList;
