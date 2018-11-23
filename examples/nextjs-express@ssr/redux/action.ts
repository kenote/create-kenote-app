
export const NEXT_PAGE_CLICK = 'NEXT_PAGE_CLICK'

export const nextPageClick = (name: string) => dispatch => {
  dispatch({
    type: NEXT_PAGE_CLICK,
    payload: name
  })
}