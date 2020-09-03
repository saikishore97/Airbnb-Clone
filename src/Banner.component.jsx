import React ,{useState} from 'react';
import './Banner.styles.css';
import {Button} from '@material-ui/core';
import SearchDates from './SearchDates.component';
import {useHistory} from 'react-router-dom';

function Banner() {
    const[showSearch,setShowSearch] = useState(false);
    const history= useHistory();

    return (
        <div className="banner">

            <div className="banner__search">
                {showSearch && <SearchDates/>}
                <Button onClick={()=>setShowSearch(!showSearch)} 
                        variant='outlined' className="banner__searchbutton">{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>

            <div className="banner__info">
                <h1>Get Out and Stretch your Imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant='outlined' onClick={()=>history.push('/search')}>Explore Near By</Button>
            </div>

        </div>

    )
}

export default Banner;
