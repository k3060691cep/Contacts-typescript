import {
    CHANGE_CONTACT_VIEW,
    CONTACT_LOADING,
    CONTACT_LOADING_FAIL,
    CONTACT_LOADING_SUCCESS, contactFilterType,
    contactLoadingType,
    contactSuccessType,
    contactViewType, FILTER_CONTACT, GET_CONTACT_URL
} from "./ActionsTyps";

export const fatchContacts = (currentPage: number, contactsForPage: number) => {
    return (dispatch: any) => {
        dispatch(tryGetContactAction(true))
        fetch(`${GET_CONTACT_URL}?results=${contactsForPage}&seed=abc`)
            .then(res => res.json())
            .then(json => dispatch(getContactAction(json.results)))
            .catch(error => console.log(error))
    }
}


export const tryGetContactAction = (payload: boolean):contactLoadingType  => ({type: CONTACT_LOADING, payload})
export const getContactAction = (payload: Array<object>):contactSuccessType  => ({type: CONTACT_LOADING_SUCCESS,  payload})
export const filterContactAction = (payload: Array<object>):contactFilterType  => ({type: FILTER_CONTACT,  payload})
export const changeContactViewAction = (payload: any): contactViewType =>  ({type: CHANGE_CONTACT_VIEW, payload})



