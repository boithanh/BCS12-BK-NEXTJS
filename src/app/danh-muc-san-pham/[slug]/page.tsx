import React from 'react'

type Props = {
    params: {
        slug: string; // hoac slug
    }
}

const page = (props: Props) => {
    console.log(props);

    return (
        <div>Tôi là thư mục page con có id nhận vào{props.params.slug}
        </div>

    )
}

export default page