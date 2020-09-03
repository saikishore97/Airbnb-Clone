import React,{useState} from 'react';
import './SearchDates.styles.css';
import {DateRangePicker} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import PeopleIcon from '@material-ui/icons/People';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';



function SearchDates() {

    const[startDate,setStartDate] = useState(new Date());
    const[endDate,setEndDate] = useState(new Date());
    const history= useHistory();

    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:"selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="searchdates">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>
                Number of Guests
                <PeopleIcon/>
            </h2>
            <input type="number" defaultValue={2} min={0} />
            <Button onClick={()=>history.push('./search')}>Search Airbnb</Button>
        </div>
    )
}

export default SearchDates;
