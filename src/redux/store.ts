import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {ActionTypes, CHANGE_CONTACT_VIEW, CONTACT_LOADING, CONTACT_LOADING_SUCCESS, FILTER_CONTACT} from './ActionsTyps'
import {composeWithDevTools} from "redux-devtools-extension";

export type Picture = {
    large: string,
    medium: string,
    thumbnail: string
}

export type Name = {
    first: string,
    last: string,
    title: string
}
export type Contact = {
    cell: string,
    dob: object,
    email: string,
    gender: string,
    id: object,
    location: object,
    login: object,
    name: Name,
    nat: string,
    phone: string,
    picture: Picture,
    registered: object
}
export type InitialStateType = {
    isLoading: boolean
    tableView: boolean
    array: Array<Contact>
    hhh: string
}

const initialState: InitialStateType = {
    isLoading: false,
    tableView: true,
    array: [],
    hhh: 'sdsads'
}


const contactsReduce = (state: InitialStateType | any = initialState, action: ActionTypes ) => {
    switch (action.type) {
        case CONTACT_LOADING:
            return {...state, isLoading: action.payload}
        case CONTACT_LOADING_SUCCESS:
            return {...state, array: action.payload, isLoading: false }
        case CHANGE_CONTACT_VIEW:
            return {...state, tableView: action.payload }
        case FILTER_CONTACT:
            return {...state, array: action.payload ? action.payload: state }
        default:
            return state
    }
}

export  const store = createStore(contactsReduce, composeWithDevTools(applyMiddleware(thunk)) )
