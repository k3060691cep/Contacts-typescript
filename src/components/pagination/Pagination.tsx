import React, {CSSProperties, useEffect, useState} from 'react';
import {Li, Ul} from "./Styled";
import {log} from "util";

export function Pagination(props: any) {
    let pages
    let lastPage
    let firstPage
    const {changePage, filteredContactsSum, currentPage} = props
    const paginationArray: Array<number> = []
    const itemsForPage = Math.ceil(filteredContactsSum / 10)

    for (let i = 1; i <= itemsForPage; i++) {
        paginationArray.push(i)
    }
    const pageHandleChange = (pageNumber: number) => {
        changePage(pageNumber)
    }
    if (paginationArray.length >= 5) {
        let stratOfSlice = 0
        let andOfSlice = 6
        if (currentPage >= 4 && currentPage <= 17) {
            stratOfSlice = currentPage - 3
            andOfSlice = currentPage + 3
        } else if (currentPage >= 17) {
            stratOfSlice = 17 - 3
            andOfSlice = 20
        }

        if (currentPage < 17) {
            lastPage = <>
                <div>....</div>
                <Li onClick={() => pageHandleChange(paginationArray.length)}>{paginationArray.length}</Li></>
        }
        if (currentPage > 3) {
            firstPage = <>
                <Li onClick={() => pageHandleChange(paginationArray.length)}>{paginationArray[0]}</Li>
                <div>....</div>
            </>

        }

        let sliced = paginationArray.slice(stratOfSlice, andOfSlice)

        pages = sliced.map((item, index) =>
            <Li key={index} active={item === currentPage ? 'active' : ''}
                onClick={() => pageHandleChange(item)}>{item}</Li>)
    } else {
        pages = paginationArray.map((item, index) =>
            <Li key={index} active={item === currentPage ? 'active' : ''}
                onClick={() => pageHandleChange(item)}>{item}</Li>)
    }

    return (
        <div>
            <Ul>
                <button disabled={currentPage === 1} onClick={() => {
                    pageHandleChange(currentPage - 1)
                }}>&#171;</button>
                {firstPage && firstPage}
                {pages}
                {lastPage && lastPage}
                <button disabled={currentPage === paginationArray.length} onClick={() => {
                    pageHandleChange(currentPage + 1)
                }}>&#187;</button>
            </Ul>
        </div>
    );
};