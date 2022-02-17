import React from 'react'
import {useSelector} from "react-redux";
import {InitialStateType} from "../../redux/store";
import {Avatar, Wrapper, Span, ContactInfo, Block} from "./Styled";


export const Bar = () => {
    const contacts = useSelector((store:InitialStateType) => {return store.array})

    return (
        <Wrapper>
            {contacts && contacts.map((item: any) => (
                    <Block key={item.login.md5}>
                        <div><Avatar src={item.picture.large} alt={item.name.first}/></div>
                        <ContactInfo>
                            <div><Span>Full name: </Span> {` ${item.name.title}  ${item.name.first} ${item.name.last}`}</div>
                            <div><Span>Birthday: </Span> {item.dob.date} </div>
                            <div><Span>Email: </Span> {item.email} </div>
                            <div><Span>Phone: </Span> {item.cell} </div>
                            <div><Span>Location: </Span> {`/ ${item.location.country}/ ${item.location.street.number} ${item.location.street.name},
                    ${item.location.state}, ${item.location.postcode}`} </div>
                            <div><Span>Nationality: </Span>N {item.location.country}</div>
                        </ContactInfo>
                    </Block>
                )
            )}
        </Wrapper>
    )
}