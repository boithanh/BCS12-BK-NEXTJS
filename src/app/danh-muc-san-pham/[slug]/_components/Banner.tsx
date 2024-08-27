import Image from 'next/image'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className='bg-red-500 w-1/2 relative'>
            <img src="/pokemon.png" alt="" />
            {/* <Image src="/pokemon.png" alt="pokemon" width="1000" height="200" fill /> */}
            <Image src="/pokemon.png" alt="pokemon" width="1000" height="200" fill />
        </div>
    )
}

export default Banner