const newsUrl = 'http://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=45bbd722e9ed4d88887103aa39f34a4f&category=health&q=covid-19'


const getNewsArticles = async () => {
  try {
    // Call to News API
    const responseNewsUrl = await axios.get(newsUrl)
    console.log(responseNewsUrl.data.articles)

    // Creating div that will hold news articles
    const covidNews = document.querySelector('.covid-news')
    for (let i = 0; i < 4; i++) {
      const covidSection = document.createElement('div')
      covidNews.append(covidSection)
    }

    // This section is creating tags and appending them for the article url's and images
    const covidNewsDiv = document.querySelectorAll('.covid-news > div')
    for (let i = 0; i < 4; i++) {
      // Getting random news article
      const ranNewsObj = responseNewsUrl.data.articles[Math.floor(Math.random() * responseNewsUrl.data.articles.length)];
      console.log(ranNewsObj)

      // Creating img tags and appending
      const articleImg = document.createElement('img')
      articleImg.src = ranNewsObj.urlToImage
      covidNewsDiv[i].append(articleImg)

      // Creating article url and appending
      const articleLink = document.createElement('a')
      articleLink.href = ranNewsObj.url
      articleLink.innerText = ranNewsObj.title
      covidNewsDiv[i].append(articleLink)
    }


  } catch (error) {
    console.log(`Error; ${error}`)
  }
}

getNewsArticles()