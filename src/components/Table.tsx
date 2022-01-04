import * as React from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {Contact, InitialStateType} from "../redux/store";

const TableStyled = styled.table`
  border-collapse: collapse;
  overflow: hidden;
  margin-top: 16px;
  width: 1600px;
  -webkit-box-shadow: 0 0 12px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 0 12px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0 0 12px 1px rgba(34, 60, 80, 0.2);
  border-radius: 8px;
`
const Header = styled.tr`
  margin: 160px 160px;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid #414141;
`
const Wrapper = styled.div`
    
`
const Row = styled.tr`
  padding: 128px 128px;
`
const Avatar = styled.img`
  border-radius: 50%;
`
const Td = styled.td`
 padding: 8px 16px;
 border-bottom: 1px solid #dddddd;
`
const Th =styled.th`
  padding: 16px 16px;
`
const Tbody = styled.thead`
  
`



export const Table = (props: any) => {
    const {filteredContacts} = props
    const contacts = useSelector((store:InitialStateType) => {return store.array})
    const sortByName = () => { }

    console.log(filteredContacts)

    return (
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
            {contacts && filteredContacts.map((item: any) =>
                <Tbody key={item.login.md5}>
                    <Row >
                        <Td><Avatar src={item.picture.thumbnail} alt={item.name.first}/></Td>
                        <Td>{`${item.name.title}  ${item.name.first} ${item.name.last}`}</Td>
                        <Td>{item.dob.date} </Td>
                        <Td>{item.email} </Td>
                        <Td>{item.cell} </Td>
                        <Td>{`/ ${item.location.country}/ ${item.location.street.number} ${item.location.street.name},
                    ${item.location.state}, ${item.location.postcode}`} </Td>
                        <Td>{item.location.country}</Td>
                    </Row>
                </Tbody>
            )
            }
        </TableStyled>
    )
}

