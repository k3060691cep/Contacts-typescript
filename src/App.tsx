import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Contact, InitialStateType} from "./redux/store";
import {
    changeContactViewAction, fatchContacts, filterContactAction, getContactAction,
} from './redux/actions'
import {Table} from "./components/table/Table";
import {Bar} from "./components/bar/BarView";
import {Button, Content, Header, Wrapper} from "./AppStyled";
import {Filter} from "./components/filter/Filter";
import {Pagination} from "./components/pagination/Pagination";
import {Statistic} from "./components/statistic/Statistic";

import { useMediaQuery } from 'react-responsive';
import {AiOutlineBars, AiOutlineAppstore} from "react-icons/all";

const App: React.FC  = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [contacts, setContacts] = useState<number>(200)
    const [handleSearchFullName, setHandleSearchFullName] = useState('');
    const [sortByFlage, setSortByFlage] = useState(true);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1640px)'
    })

    const dispatch = useDispatch()
    
    const store = useSelector((store: InitialStateType) => {return store})
    const {tableView, isLoading, array, renderContacts} = store


    const add = () =>{
            dispatch(fatchContacts(currentPage, contacts))
    }
    useEffect(() => {
        dispatch(fatchContacts(currentPage, contacts))
    }, [])

    useEffect(() => {
        dispatch(changeContactViewAction(isDesktopOrLaptop))
    }, [isDesktopOrLaptop])

    const changeView = (handleChangeView: boolean) => {
        dispatch(changeContactViewAction(handleChangeView))
    }
    const filteredByFullName = (name: any) => {
       const  {title, first, last} = name
       return `${title}${first}${last}`.toLowerCase().includes(handleSearchFullName.toLowerCase().replace(/\s+/g,''))
    }

    let filteredContacts = array.filter((contact: any) => filteredByFullName(contact.name))
    let filteredContactsSum = renderContacts.length
    let paginationContactsVsFilter = renderContacts.slice(((currentPage -1 )* 10),(currentPage * 10))

    const sortByName: any = () => {
        const  copyOfFilteredContacts: any = filteredContacts.concat()
         copyOfFilteredContacts.sort((a: any, b: any) => {
            if(sortByFlage){
                return a.name.first > b.name.first ? 1: -1
            }
            if(!sortByFlage){
                return a.name.first < b.name.first ? 1: -1
            }
        })

        dispatch(filterContactAction(copyOfFilteredContacts))
        setSortByFlage((prev) => !prev)
    }
    useEffect(() => {
        setCurrentPage(1)
        dispatch(filterContactAction(filteredContacts))
    },[handleSearchFullName])

    const changePage = (page: number) => {
        setCurrentPage(page)
    }


    return (
        <Wrapper>
            <Header>
                <Filter  handleSearchFullName={handleSearchFullName} setHandleSearchFullName={setHandleSearchFullName}/>
                <Button onClick={() => add()}>getPerson</Button>
                <Button onClick={() => changeView(true)}><AiOutlineBars/></Button>
                <Button onClick={() => changeView(false)}><AiOutlineAppstore/></Button>
            </Header>
            <Content>
                {isLoading ?
                    <div>
                    ...loading
                </div>
                    :
                    <div>
                    {tableView ?
                        <Table sortByFlag={sortByFlage}
                               sortByName={sortByName}
                               paginationContactsVsFilter={paginationContactsVsFilter}
                        /> :
                        <Bar/>}
                    </div>
                }
            </Content>
            <Statistic renderContacts={renderContacts}/>
            <Pagination changePage={changePage}
                        currentPage={currentPage}
                        filteredContactsSum={filteredContactsSum}
            />
        </Wrapper>
    );
}

export default App;
