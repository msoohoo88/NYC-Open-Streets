const randomTenNames = []

const restaurantURL = 'https://data.cityofnewyork.us/resource/pitm-atqc.json?borough='
const getRestaurantNames = async (borough) => {
  try {
    // Making call to the NYC Open Data - Open Streets Program
    const response = await axios.get(restaurantURL + borough)

    const mainRestaurantDiv = document.querySelector('.restaurantNames')

    for (let i = 0; i <= 10; i++) {
      console.log(response.data[i])

      const name = document.createElement('div')
      name.textContent = response.data[i].restaurant_name
      mainRestaurantDiv.append(name)

      const businessAddress = document.createElement('p')
      businessAddress.textContent = response.data[i].business_address
      mainRestaurantDiv.append(businessAddress)

      const servesAlcohol = document.createElement('p')
      servesAlcohol.textContent = response.data[i].qualify_alcohol
      mainRestaurantDiv.append(servesAlcohol)

      if (response.data[i].approved_for_roadway_seating === "yes" && response.data[i].approved_for_sidewalk_seating === "yes") {
        const typeOfSeating = document.createElement('p')
        typeOfSeating.textContent = "Both"
        mainRestaurantDiv.append(`Sidewalk or Roadway Seating: ${typeOfSeating.textContent}`)
      } else if (response.data[i].approved_for_roadway_seating === "yes" && response.data[i].approved_for_sidewalk_seating === "no") {
        const typeOfSeating = document.createElement('p')
        typeOfSeating.textContent = "Roadway Seating Only"
        mainRestaurantDiv.append(`Sidewalk or Roadway Seating: ${typeOfSeating.textContent}`)
      } else {
        const typeOfSeating = document.createElement('p')
        typeOfSeating.textContent = "Sidewalk Seating Only"
        mainRestaurantDiv.append(`Sidewalk or Roadway Seating: ${typeOfSeating.textContent}`)
      }
    }

  } catch (error) {
    console.log(`Error; ${error}`)
  }
}

getRestaurantNames('Manhattan')
