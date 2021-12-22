import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "./redux/store";
import {
    changeContactViewAction, fatchContacts, getContactAction,
} from './redux/actions'
import {Table} from "./components/Table";
import {Bar} from "./components/bar/BarView";
import {Button, Content, Header, Wrapper} from "./AppStyled";
import {Filter} from "./components/filter/Filter";

const App = () => {
    const dispatch = useDispatch()
    const store = useSelector((store: InitialStateType) => {return store})
    const {tableView, isLoading} = store

    const [handleSearchFullName, setHandleSearchFullName] = useState('');
    const add = () =>{
            dispatch(fatchContacts())
    }
    useEffect(() => {
        dispatch(fatchContacts())
    }, [])


    const changeView = (handleChangeView: boolean) => {
        dispatch(changeContactViewAction(handleChangeView))
    }
    const filteredByFullName = (name:any) => {
       const  {title, first, last} = name
       return (
           title.toLowerCase().includes(handleSearchFullName.toLowerCase()) ||
           first.toLowerCase().includes(handleSearchFullName.toLowerCase())||
           last.toLowerCase().includes(handleSearchFullName.toLowerCase()))
    }

    let filteredContacts = store.array.filter(contact => filteredByFullName(contact.name))

    return (
        <Wrapper>
            <Header>
                <Filter store={store} handleSearchFullName={handleSearchFullName} setHandleSearchFullName={setHandleSearchFullName}/>
                <Button onClick={() => add()}>getPerson</Button>
                <Button onClick={() => changeView(true)}>Table</Button>
                <Button onClick={() => changeView(false)}>Bar</Button>
            </Header>
            <Content>
                {isLoading ?
                    <div>
                    ...loading
                </div>
                    :
                    <div>
                    {tableView ? <Table filteredContacts={filteredContacts}/> : <Bar/>}
                    </div>
                }
            </Content>
        </Wrapper>
    );
}

export default App;
