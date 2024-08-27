"use client";
import React, { useState } from 'react'

type Props = {}

const Header = (props: Props) => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" className='p-3 bg-white border-white  rounded-md' placeholder='Vui lofng nhap noi dung'
                onChange={(event) => {
                    setValue(event.target.value)
                }}
            />
            <p>{value}</p>
        </div>
    )
}

export default Header