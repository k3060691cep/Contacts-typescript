import React, {CSSProperties, useEffect, useState} from 'react';
import {Li, Ul} from "./Styled";

export function Pagination(props: any) {
    const [array, setArray] = useState([]);
    const {changePage, filteredContactsSum, currentPage} = props
    let arr: any = []
    const itemsForPage = Math.ceil(filteredContactsSum/10)

    for(let i = 1; i <= itemsForPage; i++){
        arr.push(i)
    }
    const pageHandleChange = (pageNumber: number) => {
        changePage(pageNumber)
    }
    useEffect(() => {
        arr && setArray(arr)
    },[])

    return (
        <div>
            <Ul>
                {array&& array.map((item, index) =>
                    <Li key={index} active={item === currentPage ? 'active' : ''}
                        onClick={() => pageHandleChange(item)}>{item}</Li>
                )}
            </Ul>
        </div>
    );
};