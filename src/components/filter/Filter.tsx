import * as React from 'react';



export const Filter = (props: any) => {
    const {handleSearchFullName, setHandleSearchFullName } =props
    const handleSearch = (event: string) => {
        setHandleSearchFullName(event)
    }

    return (
        <div>
            <input type="text" placeholder='Search by full name' value={handleSearchFullName} onChange={event => handleSearch(event.target.value) }/>
            <input type="text"/>
        </div>
    );
};