import * as React from 'react';
import {Nationalities} from "../../utils/Nationalities";
import {AiOutlineFileText, BsSortAlphaDown, BsSortAlphaDownAlt, } from "react-icons/all";
import { IconContext } from "react-icons";
import { format, parseISO } from 'date-fns'
import ReactTooltip from 'react-tooltip';
import {Avatar, ColorizeCountry, CopyToClipboard, Header, Row, TableStyled, Tbody, Td, Th} from "./Styled";

export const Table: React.FC<{paginationContactsVsFilter: Array<object>, sortByName: any, sortByFlag: boolean }>  =
    ({paginationContactsVsFilter, sortByName, sortByFlag}) => {

    return (
        <>
            <TableStyled>
                <Tbody>
                    <Header>
                        <Th>Avatar</Th>
                        <Th onClick={sortByName}>Full name
                            <IconContext.Provider value={{style: { verticalAlign: 'middle' }}}>
                                <i >
                                    {sortByFlag ?
                                        <BsSortAlphaDownAlt vertical-align='middle'/> :
                                        <BsSortAlphaDown vertical-align='middle'/>}
                                </i>
                            </IconContext.Provider></Th>
                        <Th>Birthday</Th>
                        <Th>Email</Th>
                        <Th>Phone</Th>
                        <Th>Location</Th>
                        <Th>Nationality</Th>
                    </Header>
                </Tbody>
                {paginationContactsVsFilter && paginationContactsVsFilter.map((item: any) => {
                    let res = Nationalities && Nationalities.filter(nation => nation.CountryCode === item.nat)
                    return <Tbody key={item.login.uuid}>
                        <Row>
                            <Td><Avatar src={item.picture.thumbnail} alt={item.name.first}/></Td>
                            <Td className='blue' onClick={() => sortByName}>{`${item.name.title}  ${item.name.first} ${item.name.last}`}</Td>
                            <Td>{format(parseISO(item.dob.date), "MM/dd/yyyy")} <br/> {item.dob.age} years</Td>
                            <Td className='blue'><AiOutlineFileText/>{item.email} </Td>
                            <Td className='blue'>
                                <CopyToClipboard data-tip data-for="registerTip" onClick={() => {
                                    navigator.clipboard.writeText(item.cell)
                                }}>
                                    <AiOutlineFileText/>
                                    {item.cell}
                                </CopyToClipboard>
                                <ReactTooltip id="registerTip">Copy</ReactTooltip>
                            </Td>
                            <Td>{`/ ${item.location.country}/ \n 
                                    ${item.location.street.number} 
                                    ${item.location.street.name},
                                    ${item.location.state},
                                    ${item.location.postcode}`}
                            </Td>
                            <Td>
                                <ColorizeCountry
                                    countri={res[0] && res[0].color}>
                                    {res[0] ? res[0].Nationality : item.location.country}
                                </ColorizeCountry>
                            </Td>
                        </Row>
                    </Tbody>
                }
                )
                }
            </TableStyled>
        </>
    )
}

