// import { getBlogs, saveBlog } from '../api'

export const SET_WHARE_PENDING = 'SET_WHARE_PENDING'
// export const SET_BLOGS_SUCCESS = 'SET_BLOGS_SUCCESS'
// export const SET_ERROR = 'SET_ERROR'

// export function fetchBlogs () {
//   return (dispatch, getState) => {
//     dispatch(setBlogsPending())
//     return getBlogs()
//       .then(blogs => {
//         dispatch(setBlogsSuccess(blogs))
//         return null
//       })
//       .catch(err => {
//         dispatch(setError(err.message))
//       })
//   }
// }

// export function addBlog (newBlog) {
//   return dispatch => {
//     return saveBlog(newBlog)
//       .then(blogs => {
//         dispatch(setBlogsSuccess(blogs))
//         return null
//       })
//       .catch(err => {
//         dispatch(setError(err.message))
//       })
//   }
// }

export function setWharePending () {
  return {
    type: SET_WHARE_PENDING
  }
}

// export function setBlogsSuccess (blogs) {
//   return {
//     type: SET_BLOGS_SUCCESS,
//     blogs
//   }
// }

// export function setError (errMessage) {
//   return {
//     type: SET_ERROR,
//     errMessage
//   }
// }
