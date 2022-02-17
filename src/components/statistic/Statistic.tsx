import * as React from 'react';
import { Box, ContainerStyled, Item } from './Styled';

type Statistic = {
    collection: number
    males: number
    females: number
    indeterminate: number
}

export const Statistic = ({renderContacts}: any) => {
    let statisticArr: Statistic = {
        collection : 0,
        males : 0,
        females : 0,
        indeterminate : 0,
    }

    let statistic = renderContacts.map((el:any, index: number) => {
        if(el){
            statisticArr.collection += 1
        }
        if(el.gender === "female"){
            statisticArr.females += 1
        }
        if(el.gender === "male"){
            statisticArr.males += 1
        }
        if(el.gender === "indeterminate"){
            statisticArr.indeterminate += 1
        }
    })
    return (
        <ContainerStyled >
           <header>Statistic</header>
            <Box>
            <Item> <div>Collection:</div> <div> {statisticArr.collection}</div></Item>
            <Item>Males: <div>{statisticArr.males}</div>  </Item>
            <Item>Females: <div>{statisticArr.females}</div>  </Item>
            <Item>Indeterminate:<div>{statisticArr.indeterminate}</div>   </Item>
            <Item>{statisticArr.males > statisticArr.females ? 'male predominant' : 'female predominant'} </Item>
            </Box>
        </ContainerStyled>
    );
};