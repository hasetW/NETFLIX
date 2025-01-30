const Api_Key=process.env.REACT_APP_API_KEY;
const requests={
    fetchTrending: `/trending/all/week?api_key=${Api_Key}&language=en-US`,
    fetchNetflixOriginal:`/discover/movie?api_key=${Api_Key}`,
    fetchPopular:`/movie/popular?api_key=${Api_Key}&region=US`,
    fetchNewRelasedMovie:`/movie/now_playing?api_key=${Api_Key}`,
    fetchNewRelasedTVshow:`/tv/on_the_air?api_key=${Api_Key}`,
    fetchGenraMovie:`/genre/movie/list?api_key=${Api_Key}`,
    fetchGenraTV:`/genre/tv/list?api_key=${Api_Key}`,
    fetchUpcoming:`/upcoming?api_key=${Api_Key}`

}
export default requests;