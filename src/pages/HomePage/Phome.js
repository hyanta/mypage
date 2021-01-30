import React from 'react'
import { ViewContainer, ViewNavbar } from '../../components'
import { viewImage } from './Data'

const Phome = () => {
    return (
        <>
            <ViewNavbar/>
            <ViewContainer {...viewImage}/>
        </>
    )
}

export default Phome
