import * as React from 'react';
import styled from "styled-components";

const ContainerStyled = styled.div`
  display: block;
  box-sizing: border-box;
  margin-top: 8px ;
  padding: 18px 18px;
  width: 100%;
  background-color: yellow;
`
const Box = styled.div`
  display: flex;
`
const Item = styled.div`
  display: block;
  margin-right: 28px;
`

type Statistic = {
    collection: number
    males: number
    females: number
    indeterminate: number
}

export const Statistic = (props: any) => {
    let statisticArr: Statistic = {
        collection : 0,
        males : 0,
        females : 0,
        indeterminate : 0,
    }
    let count = 0

    let statistic = props.renderContacts.map((el:any, index: number) => {
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