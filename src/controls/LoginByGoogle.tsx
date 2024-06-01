import React, { useEffect, useState } from 'react';

import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';

import axios from 'axios';

const LoginByGoogle = () => {

    const [user, setUser] = useState({ access_token: "" });
    const [userProfile, setUserProfile] = useState([]);

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (GoogleResponse) => {
            setUser({ ...user, ...GoogleResponse });
            console.log(GoogleResponse);
        },
        onError: (error) => { console.log("Login Failed", error) }
    })

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: "application/json",
                        },
                    }
                )
                .then((res) => {
                    console.log(res.data);
                    setUserProfile(res.data);
                })
                .catch((error) => { console.log(error) })
        }
    }, [user])

    return (
        <div className='shadow-2xl'>
            <button
                type="button"
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    outline: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',

                }}

                onClick={() => handleGoogleLogin()}
            >
                <FcGoogle style={{ marginRight: '14px' }} />
                Sign in with Google
            </button>
        </div>
    )

};

export default LoginByGoogle;
