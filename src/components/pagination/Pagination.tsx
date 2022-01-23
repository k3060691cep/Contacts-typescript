import React, {CSSProperties, useEffect, useState} from 'react';
import {Li, Ul, Button} from "./Styled";
import { FcNext, FcPrevious,  } from 'react-icons/fc'
import {BsThreeDots } from 'react-icons/bs'

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
                <Li><BsThreeDots/></Li>
                <Li onClick={() => pageHandleChange(paginationArray.length)}>{paginationArray.length}</Li></>
        }
        if (currentPage > 3) {
            firstPage = <>
                <Li onClick={() => pageHandleChange(paginationArray[0])}>{paginationArray[0]}</Li>
                <Li><BsThreeDots/></Li>
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
                <Button disabled={currentPage === 1} onClick={() => {
                    pageHandleChange(currentPage - 1)
                }}><FcPrevious/></Button>
                {firstPage && firstPage}
                {pages}
                {lastPage && lastPage}
                <Button disabled={currentPage === paginationArray.length} onClick={() => {
                    pageHandleChange(currentPage + 1)
                }}><FcNext/></Button>
            </Ul>
        </div>
    );
};