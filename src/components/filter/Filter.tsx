import * as React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "../../redux/store";
import {filterContactAction} from "../../redux/actions";

export const Filter = (props: any) => {
    const {handleSearchFullName, setHandleSearchFullName } =props
    const handleSearch = (event: string) => {
        setHandleSearchFullName(event)
    }


    return (
        <div>
            <input type="text" value={handleSearchFullName} onChange={event => handleSearch(event.target.value) }/>
        </div>
    );
};