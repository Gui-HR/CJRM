const form = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCardContainer = document.querySelector('[data-js="city-card"')
const timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')


const insertInfo = async searchedCityName => {
    const [ { Key: cityKey, LocalizedName: cityName } ] = await getCityData(searchedCityName)
    const [ {WeatherText: cityWeather, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(cityKey) 
    const cityTemperature = Temperature.Metric.Value 
    
    const timeIcon = `<img src="src/icons/${WeatherIcon}.svg">`

    cityNameContainer.textContent = cityName 
    cityWeatherContainer.textContent = cityWeather 
    cityTemperatureContainer.textContent = cityTemperature 
    timeIconContainer.innerHTML = timeIcon
    timeImg.src = IsDayTime ? 'src/day.svg' : 'src/night.svg'
} 

const showCityCard = () => {
    if(cityCardContainer.classList.contains('d-none')) { 
        cityCardContainer.classList.remove('d-none')
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.city.value 
    
    insertInfo(inputValue)
    showCityCard()
    event.target.reset()
})