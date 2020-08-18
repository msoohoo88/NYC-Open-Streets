const restaurantURL = 'https://data.cityofnewyork.us/resource/pitm-atqc.json?borough='
const newsURL = 'https://newsapi.org/v2/everything?apiKey=45bbd722e9ed4d88887103aa39f34a4f&q=covid-19'

const getRestaurantData = async (borough) => {
  try {
    // Making call to the NYC Open Data - Open Streets Program
    const response = await axios.get(restaurantURL + borough)

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

    removeLastBoroughList()

  } catch (error) {
    console.log(`Error; ${error}`)
  }
}

// User Borough Selection
const userChoice = document.querySelector('#borough-list')
userChoice.addEventListener('change', (e) => {
  const boroughSelection = e.target.value
  console.log(boroughSelection)
  getRestaurantData(boroughSelection)
});

// Remove last user selection
const removeLastBoroughList = () => {
  const removeRestaurants = document.querySelector('.restaurants-in-borough')
  while (removeRestaurants.lastElementChild) {
    removeRestaurants.remove(removeRestaurants.lastElementChild)
  }
}



// Getting the latest COVID-19 news
// const getCovidNews = async () => {
//   try {

//     // This is taken from https://github.com/Rob--W/cors-anywhere/#documentation
//     const covidNewsUrl = (function () {
//       var cors_api_host = 'cors-anywhere.herokuapp.com';
//       var cors_api_url = 'https://' + cors_api_host + '/' + 'https://newsapi.org/v2/everything?apiKey=45bbd722e9ed4d88887103aa39f34a4f&q=covid-19';
//       var slice = [].slice;
//       var origin = window.location.protocol + '//' + window.location.host;
//       var open = XMLHttpRequest.prototype.open;
//       XMLHttpRequest.prototype.open = function () {
//         var args = slice.call(arguments);
//         var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//         if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//           targetOrigin[1] !== cors_api_host) {
//           args[1] = cors_api_url + args[1];
//         }
//         return open.apply(this, args);
//       };
//     })();
//     console.log(covidNewsUrl)

//     // Making call to the News API for articles
//     // const response = await axios.get(covidNewsUrl)
//     // console.log(response)

//   } catch (error) {
//     console.log(`Error; ${error}`)
//   }
// }

// getCovidNews()
