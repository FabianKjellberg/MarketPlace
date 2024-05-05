import './Category.css';
import {useState} from 'react';

function Category(props){

    const [imageSrc, setImageSrc] = useState(props.imageSrc);
    const [categoryName, setCategoryName] = useState(props.categoryName);
    const [categoryLink, setCategoryLink] = useState(props.categoryLink);

    return (
        <>
            <div className='category'> 
                <div className='category-image'> 
                    <img src={imageSrc} alt='' />
                </div>
                <div className='category-link'>
                    <h2>{categoryName}</h2>
                    <a href={categoryLink}>See current listings</a>
                </div>
            </div>
        </>
    );
}

export default Category;