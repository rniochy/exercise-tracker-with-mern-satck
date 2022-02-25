import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchData from '../axios/axios';

const Createuser = () => {
    const navigate = useNavigate();

    const inicialValue = {username: ''};
    const [alreadExistError, setAlreadExistError] = useState(false);
    const [userData, setUserData] = useState(inicialValue); 
    const {username} = userData;

    const handleChangeInput = (e) =>{
         const {name, value } = e.target;
         setUserData({...userData, [name]: value});
    }

    const handleSubmit =  async(e) => {
        e.preventDefault();
        
        let res = await fetchData.post('/user/add', userData);
        if(res.data.Error){
            setAlreadExistError(true);

            setTimeout(()=> { setAlreadExistError(false)}, 2000)

        } else {
            console.log(alreadExistError)
            setUserData(inicialValue);
            navigate('/');
             
        }
            
         
    }
    return (
        <div className='createexercise_content'>
     <form className='createexercise_form' onSubmit={handleSubmit} method='SET'>   
     <h2>Create new User</h2>   
         <div className='createexercise_div'>
             <label>
                     Username: 
             </label>
             <input
                        type='text'
                        value={username}
                        name= 'username'
                        onChange={handleChangeInput}
            />
           
             <br/>
         <div className='createexercise_div_button'>
             <input value='Create user' type="submit"/> 
              { alreadExistError ? <p 
             style={ {color: 'red', transition: 'ease-in-out'
                }
            }>  already Exist! </p> : ''
                
                }
         </div>
        </div>
     </form>
     </div>
    );
}

export default Createuser;
