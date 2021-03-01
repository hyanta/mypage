import React from 'react'
import useFireStore from '../../../hooks/useFireStore'
import '../ViewContainer.scss'

const ImageGridBanner = ({setSelectedImg}) => {
    const {docs} = useFireStore('pop')
    console.log(docs)

    return (
        <div  >
            {docs.map(doc => (
                <div className='view__field__tap_pc__profile__section__con_box__wrap'
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <img className='view__field__tap_pc__profile__section__con_box__wrap__p' src={doc.url} alt='uploaded pic'/>
                </div>
            ))}
        </div>
    )
}

export default ImageGridBanner
