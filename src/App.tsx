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
import {Pagination} from "./components/pagination/Pagination";

const App = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [contacts, setContacts] = useState(200)
    const [handleSearchFullName, setHandleSearchFullName] = useState('');

    const dispatch = useDispatch()
    const store = useSelector((store: InitialStateType) => {return store})
    const {tableView, isLoading} = store


    const add = () =>{
            dispatch(fatchContacts(currentPage, contacts))
    }
    useEffect(() => {
        dispatch(fatchContacts(currentPage, contacts))
    }, [])


    const changeView = (handleChangeView: boolean) => {
        dispatch(changeContactViewAction(handleChangeView))
    }
    const filteredByFullName = (name:any) => {
       const  {title, first, last} = name
       return (
           title.toLowerCase().includes(handleSearchFullName.toLowerCase()) ||
           first.toLowerCase().includes(handleSearchFullName.toLowerCase())||
           last.toLowerCase().includes(handleSearchFullName.toLowerCase())
       )
    }
    if(handleSearchFullName !== ''){

    }

    let filteredContacts = store.array.filter((contact: any) => filteredByFullName(contact.name))
    let filteredContactsSum = filteredContacts.length
    let paginationContacts = filteredContacts.slice(((currentPage -1 )* 10),(currentPage * 10))

    useEffect(() => {
        setCurrentPage(1)
    },[handleSearchFullName])
    const changePage = (page: number) => {
        setCurrentPage(page)
    }

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
                    {tableView ? <Table filteredContacts={paginationContacts}/> : <Bar/>}
                    </div>
                }
            </Content>
            <Pagination changePage={changePage} currentPage={currentPage} filteredContactsSum={filteredContactsSum}/>
        </Wrapper>
    );
}

export default App;
