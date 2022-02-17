import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {ActionTypes, CHANGE_CONTACT_VIEW, CONTACT_LOADING, CONTACT_LOADING_SUCCESS, FILTER_CONTACT, STATISTIC} from './ActionsTyps'
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
    renderContacts: Array<Contact>
    statistic: Statistic
}
export type Statistic = {
    collection: number
    males: number
    females: number
    indeterminate: number
}

const initialState: InitialStateType = {
    isLoading: false,
    tableView: true,
    array: [],
    renderContacts: [],
    statistic: {
        collection : 0,
        males : 0,
        females : 0,
        indeterminate : 0,
    }
}
console.log('inStore',initialState.array)

const contactsReduce = (state: InitialStateType | any = initialState, action: ActionTypes ) => {
    switch (action.type) {
        case CONTACT_LOADING:
            return {...state, isLoading: action.payload}
        case CONTACT_LOADING_SUCCESS:
            return {...state, array: action.payload, isLoading: false, renderContacts: action.payload }
        case CHANGE_CONTACT_VIEW:
            return {...state, tableView: action.payload }
        case FILTER_CONTACT:
            return {...state, renderContacts: action.payload ? action.payload: state }
        case STATISTIC:
            return {...state, renderContacts: action.payload ? action.payload: state }
        default:
            return state
    }
}

export  const store = createStore(contactsReduce, composeWithDevTools(applyMiddleware(thunk)) )
