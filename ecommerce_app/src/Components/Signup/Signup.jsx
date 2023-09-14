import { useEffect, useState } from 'react';
import '../Style/Signup.css';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUserDetails } from '../../Store/Slices/Authentication';

export const Signup = () => {

    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [signupState, setSignupState] = useState(null);
    const user = localStorage.getItem('userInfo');;
    const Navigate = useNavigate();

    const performSignup = async (event) => {
        event.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password).then((userCredientals) => {
            localStorage.setItem('userInfo', userCredientals.user);
            dispatch(addUserDetails(userCredientals.user));
            console.log(userCredientals);
        }).catch(error => console.log(error.message));
        if (user) {
            Navigate('/home');
        }
    }

    const performLogin = () => {
        Navigate('/login')
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePass = (event) => {
        setPassword(event.target.value);
    }
    const handleUserName = (event) => {
        setUserName(event.target.value);
    }
    const handleConfirmPass = (event) => {
        setConfirmPass(event.target.value);
    }

    useEffect(() => {
        if (user) {
            Navigate('/homepage')
        }
    })
    useEffect(() => {
        setSignupState(() => {
            return (
                <>
                    <div className='Signup'>
                        <h1>Sign Up</h1>
                        <form className='container '>
                            <div className='row'>
                                <div>
                                    <label className='LabelDiv' htmlFor="">UserName</label>
                                    <input className='mt-2 mb-1 inputs' type="username" value={userName} onChange={handleUserName} />
                                </div>
                            </div>
                            <div className='row'>
                                <div >
                                    <label className='LabelDiv' htmlFor="">Email</label>
                                    <input className='mt-2 mb-1 inputs' type="email" value={email} onChange={handleEmail} />
                                </div>
                            </div>
                            <div className='row'>
                                <div >
                                    <label className='mt-2 mb-1 LabelDiv' htmlFor="">Password</label>
                                    <input className='mt-2 mb-1 inputs' type="password" value={password} onChange={handlePass} />
                                </div>
                            </div>
                            <div className='row'>
                                <div>
                                    <label className='mt-2 mb-1 LabelDiv' htmlFor="">Confirm Password</label>
                                    <input className='mt-2 mb-1 inputs' type="text" value={confirmPass} onChange={handleConfirmPass} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='LoginDiv w-100 mt-3'>
                                    <button onClick={performSignup} className='btn btn-light'>Sign up</button>`
                                    <button onClick={performLogin} className='btn btn-light'>Login</button>`

                                </div>
                            </div>
                        </form>
                    </div>
                </>
            );
        })
    }, [email, password, confirmPass, userName])
    return (
        <>
            {signupState}
        </>
    )
}
