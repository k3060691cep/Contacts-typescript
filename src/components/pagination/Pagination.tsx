import * as React from 'react';
import styled from "styled-components";
import { useNavigate  } from "react-router-dom";

const Ul = styled.li`
  display: flex;
  list-style-type: none;
`
const Li = styled.li`
  margin: 4px 4px;
  padding: 4px 4px;
  cursor: pointer;
  background-color: #61dafb;
`

export function Pagination(props: any) {
  const {changePage, filteredContactsSum} = props
    let arr = []
    const itemsForPage = Math.ceil(filteredContactsSum/10)
    for(let i = 1; i <= itemsForPage; i++){
        arr.push(i)
    }
    const pageHandleChange = (pageNumber: number) => {
        changePage(pageNumber)
    }

    return (
        <div>
            <Ul>
                {arr.map(item => <Li onClick={()=> pageHandleChange(item)}>{item}</Li>)}
            </Ul>
        </div>
    );
};