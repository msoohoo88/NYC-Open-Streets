const randomTenNames = []

const restaurantURL = 'https://data.cityofnewyork.us/resource/pitm-atqc.json?borough='
const getRestaurantData = async (borough) => {
  try {
    // Making call to the NYC Open Data - Open Streets Program
    const response = await axios.get(restaurantURL + borough)

    const mainRestaurantDiv = document.querySelector('.restaurantsInBorough')
    for (let i = 0; i <= 10; i++) {
      const divSection = document.createElement('div')
      mainRestaurantDiv.append(divSection)
    }

    const mainRestaurantNameDiv = document.querySelectorAll('.restaurantsInBorough > div')
    for (let i = 0; i <= 10; i++) {
      const nameOfRestaurant = document.createElement('p')
      const businessAddress = document.createElement('p')
      const servesAlcohol = document.createElement('p')
      const typeOfSeating = document.createElement('p')

      nameOfRestaurant.textContent = response.data[i].restaurant_name
      mainRestaurantNameDiv[i].append(nameOfRestaurant)
      nameOfRestaurant.classList.add("restaurant-name");

      businessAddress.textContent = response.data[i].business_address
      mainRestaurantNameDiv[i].append(businessAddress)
      businessAddress.classList.add("business-address");

      if (response.data[i].qualify_alcohol === 'yes') {
        servesAlcohol.textContent = "Serves alcohol: Yes"
        mainRestaurantNameDiv[i].append(servesAlcohol)
        servesAlcohol.classList.add("serves-alcohol");
      } else {
        servesAlcohol.textContent = "Serves alcohol: No"
        mainRestaurantNameDiv[i].append(servesAlcohol)
        servesAlcohol.classList.add("serves-alcohol");
      }

      if (response.data[i].approved_for_roadway_seating === "yes" && response.data[i].approved_for_sidewalk_seating === "yes") {
        typeOfSeating.textContent = "Sidewalk or Roadway Seating: Both"
        mainRestaurantNameDiv[i].append(typeOfSeating)
        typeOfSeating.classList.add("seating-type");
      } else if (response.data[i].approved_for_roadway_seating === "yes" && response.data[i].approved_for_sidewalk_seating === "no") {
        typeOfSeating.textContent = "Sidewalk or Roadway Seating: Roadway Seating Only"
        mainRestaurantNameDiv[i].append(typeOfSeating)
        typeOfSeating.classList.add("seating-type");
      } else {
        typeOfSeating.textContent = "Sidewalk or Roadway Seating:Sidewalk Seating Only"
        mainRestaurantNameDiv[i].append(typeOfSeating)
        typeOfSeating.classList.add("seating-type");
      }
    }

  } catch (error) {
    console.log(`Error; ${error}`)
  }
}

getRestaurantData('Queens')
