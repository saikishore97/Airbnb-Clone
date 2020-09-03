import React from 'react';
import './SearchResult.styles.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({img,title,description,price,location,star,total}) {
    return (
        <div className="searchresult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="searchresult__hearticon"/>
            <div className="searchresult__info">

                <div className="searchresult__info__top">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchresult__info__bottom">

                    <div className="searchresult__info__starcontainer">
                        <StarIcon className="searchresult__info__starcontainer__star"/>
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>

                    <div className="searchresult__info__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SearchResult;
