import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { addUserDetails } from '../../Store/Slices/Authentication';

export const Login = () => {
    const dispatch = useDispatch();

    const Navigate = useNavigate();
    const [email, setEmail] = useState();
    const [Pass, setPass] = useState();
    const userInfo = localStorage.getItem('userInfo');

    useEffect(() => {
        if (userInfo) {
            Navigate('/homepage');
        }
    })

    const performLogin = async (event) => {
        event.preventDefault();
        console.log(email, Pass);
        if (!email && !Pass) {
            alert('Please Fill ALL Details');
        }
        else if (email && Pass) {
            signInWithEmailAndPassword(auth, email, Pass).then((userCredientals) => {
                dispatch(addUserDetails(userCredientals.user));
            })
        }

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)

    }

    const performSignup = () => {
        Navigate('/')
    }


    const [loginState, setLoginState] = useState(null);

    useEffect(() => {
        setLoginState(() => {
            return (
                <>
                    <div className='Signup'>
                        <h1> Login</h1>
                        <form className='container '>
                            <div className='row'>
                                <div >
                                    <label className='LabelDiv' htmlFor="">Email</label>
                                    <input className='mt-2 mb-1 inputs' type="email" value={email} onChange={handleEmailChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div >
                                    <label className='mt-2 mb-1 LabelDiv' htmlFor="">Password</label>
                                    <input className='mt-2 mb-1 inputs' type="password" value={Pass} onChange={handlePassChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='LoginDiv w-100 mt-3'>
                                    <button onClick={performLogin} className='btn btn-light'>Login</button>`
                                    <button onClick={performSignup} className='btn btn-light'>Sign up</button>`
                                </div>
                            </div>
                        </form>
                    </div>
                </>
            );
        })
    }, [])

    return (
        <>
            {loginState}
        </>
    )
}
