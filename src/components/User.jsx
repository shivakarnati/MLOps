import axios from "axios";
import React,{useState} from "react";  
import {ApiResponseDialogue, ApiResponse} from "../ApiResponse";
import {Link, useNavigate} from "react-router-dom";


const RegistrationComponent = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/login');
    }

    return (
        <div className="login-dark">
            <form onSubmit={handleSubmit} className="registration-form">
                <h2 className="sr-only">Registration Form</h2>
                <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                
                <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="Name" required />
                </div>
                
                <div className="form-group">
                    <input className="form-control" type="number" name="age" placeholder="Age" required />
                </div>
                
                <div className="form-group">
                    <input className="form-control" type="tel" name="mobileNumber" placeholder="Mobile Number" required />
                </div>
                
                <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="Email" required />
                </div>
                
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" required />
                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
                </div>
                
                <div className="text-center">
                    <Link to="/login" className="login-link">Already a User? Log In</Link>
                </div>
            </form>
        </div>
    );
}


function UserRegistration(){
    const [formData, setFormData] = useState({
        name:'',
        age:'',
        mobileNumber: '',
        email:'',
        password:''
    });

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState(""); 

    const closeModal = () => {
        setIsSuccessModalOpen(false);
    };
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8080/api/user/register',formData);
            
            if(response.data.status){
                setSuccessMessage(response.data.message);
                setIsSuccessModalOpen(true);
            }
        }catch(error){
            console.error('Error',error);
        }
        
    };


    return(
        <div>
        <RegistrationComponent />
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                />
                </div>
                <div>
                    <label>Mobile Number:</label>
                    <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>
                <div>
                <label>Password:</label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            </div>
            <button type='submit'>Register</button>
        
            <ApiResponseDialogue
            isOpen={isSuccessModalOpen}
            onClose={closeModal}
            successMessage={successMessage}
/>
        </form>
        </div>
    );

}


const LoginComponent = () => {
    return (
        <div className="login-dark">
            <form method="post">
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Log In</button></div>
                <a href={<UserRegistration />} className="forgot">Forgot your email or password?</a>
            </form>
        </div>
    );
}



function UserLogin() {
    const [formData, setFormData] = useState({
        emailId: '',
        password: ''
    });

    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/user/login', formData);
            const responseData = response.data;

            if (responseData.status) {
                console.log('Login successful:', responseData.message);
                console.log('user', responseData.payload);
            } else {
                console.log('Login failed:', responseData.message);
            }
            setResponse(responseData);
        } catch (error) {
            console.error('Error', error);
        }
    };

    return (
        <div>
            <LoginComponent /> 
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="emailId"
                        value={formData.emailId}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            {response && (
                <ApiResponse
                    message={response.message}
                    status={response.status}
                    payload={response.payload}
                />
            )}
        </div>
    );
}

export {UserRegistration, UserLogin};
