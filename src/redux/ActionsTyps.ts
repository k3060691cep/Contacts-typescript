export const CONTACT_LOADING = 'CONTACT_LOADING'
export const CONTACT_LOADING_FAIL = 'CONTACT_LOADING_FAIL'
export const CONTACT_LOADING_SUCCESS = 'CONTACT_LOADING_SUCCESS'
export const CHANGE_CONTACT_VIEW = 'CHANGE_CONTACT_VIEW'
export const GET_CONTACT_URL = `https://randomuser.me/api/`
export const FILTER_CONTACT = 'FILTER_CONTACT'
export const STATISTIC = 'STATISTIC'

export type contactViewType  = {
    type: typeof CHANGE_CONTACT_VIEW
    payload: boolean
}
export type contactLoadingType = {
    type: typeof CONTACT_LOADING
    payload: boolean
}
export type contactFailType = {
    type: typeof CONTACT_LOADING_FAIL
    payload: string
}
export type contactSuccessType = {
    type: typeof CONTACT_LOADING_SUCCESS
    payload: Array<object>
}
export type contactFilterType = {
    type: typeof FILTER_CONTACT
    payload: Array<object>
}
export type statisticType = {
    type: typeof STATISTIC
    payload: Array<object>
}

export type ActionTypes = contactLoadingType | contactFailType | contactSuccessType | contactViewType| contactFilterType | statisticType