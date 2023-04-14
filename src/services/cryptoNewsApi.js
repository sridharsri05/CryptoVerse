import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";




const cryptoApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'ff75577dd0msh1a5f0c523e9b6c0p111106jsn00ac3a4c5fe9',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}



const baseUrl = 'https://bing-news-search1.p.rapidapi.com'





const createRequest = (url) => ({ url, headers: cryptoApiHeaders });



export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});



export const { useGetCryptosNewsQuery } = cryptoNewsApi;











// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {safeSearch: 'Off', textFormat: 'Raw'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': 'ff75577dd0msh1a5f0c523e9b6c0p111106jsn00ac3a4c5fe9',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };

