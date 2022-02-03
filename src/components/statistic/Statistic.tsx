import * as React from 'react';
import styled from "styled-components";

const ContainerStyled = styled.div`
  box-sizing: border-box;
  margin-top: 8px ;
  padding: 18px 18px;
  width: 100%;
  background-color: yellow;
`
type Statistic = {
    collection: number
    males: number
    females: number
    indeterminate: number
}

export const Statistic = (props: any) => {
    console.log(props.renderContacts)
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
        console.log(count)

    })
    return (
        <ContainerStyled >
            Statistic
            <div>Collection:  {statisticArr.collection}</div>
            <div>Males:  {statisticArr.males} </div>
            <div>Females:  {statisticArr.females} </div>
            <div>Indeterminate:  {statisticArr.indeterminate} </div>
            <div>{statisticArr.males > statisticArr.females ? 'male predominant' : 'female predominant'} </div>
        </ContainerStyled>
    );
};