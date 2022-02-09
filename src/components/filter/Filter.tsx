import * as React from 'react';

interface FilterProps {
    handleSearchFullName: string,
    setHandleSearchFullName: any
}

export const Filter: React.FC<FilterProps> = (props: any) => {
    const {handleSearchFullName, setHandleSearchFullName } =props
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHandleSearchFullName(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder='Search by full name' value={handleSearchFullName} onChange={event => handleSearch(event) }/>
            <input type="text"/>
        </div>
    );
};