import request from '../axios/index'

export const getWordToUById = (uId) => request.post('/getWordToUById', { uId: uId })
//發送post請求，訪問的端點為getWordToUById，要發送的資料物件為uId: uId