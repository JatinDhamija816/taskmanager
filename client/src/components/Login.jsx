import React, { useState } from 'react'
import axios from 'axios'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' })
    const [msg, setMsg] = useState('')
    const [show, setShow] = useState(true)

    const HandleChange = ((e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    })
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            if (!user.email || !user.password) {
                setMsg('Please fill all details')
                return
            }
            if (user.password.length < 6) {
                setMsg('Password length must be greater than 6')
                return
            }
            const res = axios.post('http://localhost:8000/login', user)
            const value = await res
            if (value.data.success) {
                setMsg(value.data.message)
            }
        } catch (error) {
            const value = await error
            setMsg(value.response.data.message)
            console.log(error)
        }
    }
    return (
        <div className='w-1/4 mt-10 mx-auto md:w-2/4'>
            <div>
                <h1 className='text-3xl text-center font-semibold'>Login</h1>
                <p className='text-red-500 text-center'>{msg}</p>
            </div>
            <div className='my-5 w-full'>
                <label className='w-full ml-1 my-2 font-semibold text-lg'>Email</label>
                <input className='p-1 rounded-md w-full my-2 border outline-none' name='email' value={user.email} onChange={HandleChange} type="email" placeholder='Enter Email' />
            </div>
            <div className='my-5 w-full'>
                <label className='w-full ml-1 my-2 font-semibold text-lg'>Password</label>
                <div className='flex border justify-between align-middle rounded-md'>
                    <div>
                        <input className='p-1 rounded-md  w-full outline-none' name='password' value={user.password} onChange={HandleChange} type={show ? 'password' : 'text'} placeholder='Enter Password' />
                    </div>
                    {
                        show ?
                            <button className='mr-1' onClick={() => setShow(!show)}><VisibilityIcon /></button>
                            :
                            <button className='mr-1' onClick={() => setShow(!show)}><VisibilityOffIcon /></button>
                    }
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <button className='bg-black text-white rounded-lg w-2/3 py-1' onClick={handleLogin}>Login</button>
            </div>
            <div className='flex justify-center mt-10'>
                <p ><span className='text-blue-500'><Link to='/register'>click Here</Link></span> for Register</p>
            </div>
        </div>
    )
}

export default Login
