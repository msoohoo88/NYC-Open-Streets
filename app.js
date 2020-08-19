const restaurantURL = 'https://data.cityofnewyork.us/resource/pitm-atqc.json'
const newsUrl = 'http://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?apiKey=45bbd722e9ed4d88887103aa39f34a4f&q=covid-19'

const getRestaurantData = async (borough) => {
  try {
    // Call to News API
    const responseNewsUrl = await axios.get(newsUrl)

    // Creating div that will hold news articles
    const covidNews = document.querySelector('.covid-news')
    for (let i = 0; i < 4; i++) {
      const covidSection = document.createElement('div')
      covidNews.append(covidSection)
    }

    // This section is creating tags and appending them for the article url's and images
    const covidNewsDiv = document.querySelectorAll('.covid-news > div')
    for (let i = 0; i < 4; i++) {
      // Creating img tags and appending
      const articleImg = document.createElement('img')
      articleImg.src = responseNewsUrl.data.articles[i].urlToImage
      covidNewsDiv[i].append(articleImg)

      // Creating article url and appending
      const articleLink = document.createElement('a')
      articleLink.href = responseNewsUrl.data.articles[i].url
      articleLink.innerText = responseNewsUrl.data.articles[i].title
      covidNewsDiv[i].append(articleLink)
    }

    // Making call to the NYC Open Data - Open Streets Program
    const response = await axios.get(`${restaurantURL}?borough=${borough}`)

    // Creating div that will hold restaurant data
    const mainRestaurantDiv = document.querySelector('.restaurants-in-borough')
    for (let i = 0; i <= 10; i++) {
      const divSection = document.createElement('div')
      mainRestaurantDiv.append(divSection)
    }

    // This section is creating tags and appending them for the restaurants data
    const mainRestaurantNameDiv = document.querySelectorAll('.restaurants-in-borough > div')
    for (let i = 0; i <= 10; i++) {
      // Creating p tags for data
      const nameOfRestaurant = document.createElement('p')
      const businessAddress = document.createElement('p')
      const servesAlcohol = document.createElement('p')
      const typeOfSeating = document.createElement('p')

      // Appending restaurant name and class
      nameOfRestaurant.textContent = response.data[i].restaurant_name
      mainRestaurantNameDiv[i].append(nameOfRestaurant)
      nameOfRestaurant.classList.add("restaurant-name");

      // Appending restaurant address and class
      businessAddress.textContent = response.data[i].business_address
      mainRestaurantNameDiv[i].append(businessAddress)
      businessAddress.classList.add("business-address");

      // Appending if the restaurant serves alcohol and appending class
      if (response.data[i].qualify_alcohol === 'yes') {
        servesAlcohol.textContent = "Serves alcohol: Yes"
        mainRestaurantNameDiv[i].append(servesAlcohol)
        servesAlcohol.classList.add("serves-alcohol");
      } else {
        servesAlcohol.textContent = "Serves alcohol: No"
        mainRestaurantNameDiv[i].append(servesAlcohol)
        servesAlcohol.classList.add("serves-alcohol");
      }

      // Appending what type of outdoor dining is available and appending class
      if (response.data[i].approved_for_roadway_seating === "yes" && response.data[i].approved_for_sidewalk_seating === "yes") {
        typeOfSeating.textContent = "Sidewalk and roadway seating available"
        mainRestaurantNameDiv[i].append(typeOfSeating)
        typeOfSeating.classList.add("seating-type");
      } else if (response.data[i].approved_for_roadway_seating === "yes" && response.data[i].approved_for_sidewalk_seating === "no") {
        typeOfSeating.textContent = "Only roadway seating available"
        mainRestaurantNameDiv[i].append(typeOfSeating)
        typeOfSeating.classList.add("seating-type");
      } else {
        typeOfSeating.textContent = "Only sidewalk seating available"
        mainRestaurantNameDiv[i].append(typeOfSeating)
        typeOfSeating.classList.add("seating-type");
      }
    }

    // Creating div that will hold total numbers data
    const totalNumberDiv = document.querySelector('.number-of-restaurants')
    const totalDivSection = document.createElement('div')
    totalNumberDiv.append(totalDivSection)

    // This section is creating tags and appending them for the restaurants total numbers
    const totalBoroughNumberDiv = document.querySelector('.number-of-restaurants > div')
    const yesRoadwayArr = []
    const yesSidewalkArr = []
    const sideAndRoadArr = []
    for (let i = 0; i < response.data.length; i++) {
      const stats = response.data[i]
      if (stats.approved_for_roadway_seating === "yes") {
        yesRoadwayArr.push(stats.approved_for_roadway_seating)
      }
      if (stats.approved_for_sidewalk_seating === "yes") {
        yesSidewalkArr.push(stats.approved_for_sidewalk_seating)
      }
      if (stats.approved_for_roadway_seating === "yes" && stats.approved_for_sidewalk_seating === "yes") {
        sideAndRoadArr.push('both')
      }
    }
    const roadwayStats = document.createElement('p')
    const sidewalkStats = document.createElement('p')
    const roadwayAndSidewalkStats = document.createElement('p')

    roadwayStats.textContent = `# of restaurants offering roadway dining: ${yesRoadwayArr.length}`
    totalBoroughNumberDiv.append(roadwayStats)
    sidewalkStats.textContent = `# of restaurants offering sidewalk dining: ${yesSidewalkArr.length}`
    totalBoroughNumberDiv.append(sidewalkStats)
    roadwayAndSidewalkStats.textContent = `# of restaurants offering sidewalk and roadway dining: ${sideAndRoadArr.length}`
    totalBoroughNumberDiv.append(roadwayAndSidewalkStats)

  } catch (error) {
    console.log(`Error; ${error}`)
  }
}

// User Borough Selection
const userBorough = document.querySelector('#borough-list')
userBorough.addEventListener('change', (e) => {
  const boroughSelection = e.target.value
  getRestaurantData(boroughSelection)
  removeLastSelections()
});

// Remove last selections
const removeLastSelections = () => {
  // Removing Restaurants
  const removeRestaurants = document.querySelector('.restaurants-in-borough')
  while (removeRestaurants.lastChild) {
    removeRestaurants.removeChild(removeRestaurants.lastChild)
  }

  // Removing Stats
  const removeStats = document.querySelector('.number-of-restaurants')
  while (removeStats.lastChild) {
    removeStats.removeChild(removeStats.lastChild)
  }

  // Removing News Articles
  const removeNews = document.querySelector('.covid-news')
  while (removeNews.lastChild) {
    removeNews.removeChild(removeNews.lastChild)
  }
}