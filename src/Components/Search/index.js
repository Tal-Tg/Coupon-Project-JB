import React from 'react';
import JSONDATA from './MOC_DATA.json';
import {useState} from 'react';

function Search1() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        
        <div>
            <input aria-controls="homePage_DropDownAddress" role="combobox" type="text" placeholder="Search..." onChange={e => {setSearchTerm(e.target.value)}}/>
            {searchTerm != "" ?
            JSONDATA.filter((val) => {
                if(searchTerm == ""){
                    return val;
                }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((val, key) =>{
                return <div key={key}>{val.first_name}</div>;
            })
            :""}

        </div>
    )
}

export default Search1;
