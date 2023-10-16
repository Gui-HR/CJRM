const APIKey = 	'iQnZXgxgA6pjBlEQYxsPqtBIPqwOoDQt'
const urlBase = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>
    `${urlBase}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = cityKey =>
    `${urlBase}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`


const fetchData = async (endPoint) => {
    try{
        const response = await fetch(endPoint)

        if(!response.ok) {
            throw new Error('Não foi possivel obter os dados desta cidade')
        }

        return response.json()

    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))
