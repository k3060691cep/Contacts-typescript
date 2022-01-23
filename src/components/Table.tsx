import * as React from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {InitialStateType} from "../redux/store";
import {Nationalities} from "./constats/Nationalities";
import {AiOutlineFileText, AiOutlineRotateRight} from "react-icons/all";
import {BsBox} from "react-icons/all";

type props = {
    countri?: string;
}

const TableStyled = styled.table`
  border-collapse: collapse;
  overflow: hidden;
  margin-top: 16px;
  width: 1700px;
  -webkit-box-shadow: 0 0 12px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 0 12px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0 0 12px 1px rgba(34, 60, 80, 0.2);
  border-radius: 8px;
  
`
const Header = styled.tr`

  margin: 140px 140px;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid #414141;
`
const Wrapper = styled.div`
    
`
const Row = styled.tr`
height: 66px;
  padding: 0px 108px;
`
const Avatar = styled.img`
  border-radius: 50%;
`
const Td = styled.td`
 padding: 8px 24px;
 border-bottom: 1px solid #dddddd;
 &.blue {
  color: #1f9eff;
 } 
`
const Th =styled.th` 
 padding: 16px 16px;
`
const Tbody = styled.thead`
  
`
const ColorizeCountry = styled.div`
  border-radius: 4px;
  padding: 4px 6px;
  background-color: ${(props: props) => props.countri ? props.countri : "#a5a5a5 "};
 
`

export const Table = (props: any) => {

    const {filteredContacts} = props
    const contacts = useSelector((store:InitialStateType) => {return store.array})
    const sortByName = () => { }

    console.log(filteredContacts)

    return (
        <>
        <TableStyled>
            <Tbody>
                <Header>
                    <Th>Avatar</Th>
                    <Th onClick={sortByName}>Full name</Th>
                    <Th>Birthday</Th>
                    <Th>Email</Th>
                    <Th>Phone</Th>
                    <Th>Location</Th>
                    <Th>Nationality</Th>
                </Header>
            </Tbody>
            {contacts && filteredContacts.map((item: any) => {
                let res = Nationalities.filter(nation => nation.CountryCode === item.nat)
                console.log(res)
              return  <Tbody key={item.login.md5}>
                    <Row >
                        <Td><Avatar src={item.picture.thumbnail} alt={item.name.first}/></Td>
                        <Td className='blue'>{`${item.name.title}  ${item.name.first} ${item.name.last}`}</Td>
                        <Td>{item.dob.date} </Td>
                        <Td className='blue'><AiOutlineFileText/>{item.email} </Td>
                        <Td className='blue'><AiOutlineFileText/>{item.cell} </Td>
                        <Td>{`/ ${item.location.country}/ ${item.location.street.number} ${item.location.street.name},
                    ${item.location.state}, ${item.location.postcode}`} </Td>
                        <Td><ColorizeCountry countri={res[0] && res[0].color}>{res[0] ?  res[0].Nationality : item.location.country}</ColorizeCountry></Td>
                    </Row>
                </Tbody>}
            )
            }
        </TableStyled>
            </>
    )
}

