# Project Overview

## Project Name

NYC Open Streets

## Project Description

This allows users to see which restaurants are open for sidewalk/roadside dining in their neighborhoods. It will also display the latest in COVID-19 news.

## API and Data Sample
API - https://data.cityofnewyork.us/resource/pitm-atqc.json?
Sample JSON:
```json
[
    {
        "objectid": "1911",
        "globalid": "137972fc-e009-4820-84b2-828f61c01a6a",
        "seating_interest_sidewalk": "both",
        "restaurant_name": "Queens Bully",
        "legal_business_name": "R & S HOSPITALITY LLC",
        "doing_business_as_dba": "QUEENS BULLY",
        "bulding_number": "11330",
        "street": "QUEENS BOULEVARD",
        "borough": "Queens",
        "zip": "11375",
        "business_address": "11330 QUEENS BOULEVARD, Queens, NY",
        "food_service_establishment": "50066757",
        "sidewalk_dimensions_length": "58",
        "sidewalk_dimensions_width": "5",
        "sidewalk_dimensions_area": "290",
        "roadway_dimensions_length": "65",
        "roadway_dimensions_width": "10",
        "roadway_dimensions_area": "650",
        "approved_for_sidewalk_seating": "yes",
        "approved_for_roadway_seating": "yes",
        "qualify_alcohol": "yes",
        "sla_serial_number": "907149",
        "sla_license_type": "OP",
        "landmark_district_or_building": "no",
        "healthcompliance_terms": "yes",
        "time_of_submission": "2020-06-19T20:43:00.000",
        "latitude": "40.717517",
        "longitude": "-73.835524",
        "community_board": "6",
        "council_district": "29",
        "census_tract": "76901",
        "bin": "4079813",
        "bbl": "4033400024",
        "nta": "Forest Hills"
    }
]
```

API - https://newsapi.org/v2/everything?apiKey=45bbd722e9ed4d88887103aa39f34a4f&q=covid-19
Sample JSON:
```json
{
    "status": "ok",
    "totalResults": 462504,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Kate Dore on Two Cents, shared by Kate Dore to Lifehacker",
            "title": "Negotiate With Your Landlord During COVID-19",
            "description": "As the pandemic stretches on—and lawmakers continue negotiations for the latest stimulus package—experts have warned there may be a looming eviction crisis. Whether your family is suffering from a job loss or a pay cut, now may be the time to start negotiatin…",
            "url": "https://twocents.lifehacker.com/negotiate-with-your-landlord-during-covid-19-1844623304",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/nhxxxfveaezewbdweduk.jpg",
            "publishedAt": "2020-08-05T20:30:00Z",
            "content": "As the pandemic stretches onand lawmakers continue negotiations for the latest stimulus packageexperts have warned there may be a looming eviction crisis. Whether your family is suffering from a job … [+1743 chars]"
        },
```

## Wireframes

https://wireframe.cc/mNyVna

#### MVP 
- Allow user to select their borough
- Render data on page - includes name, address, if they serve alcohol, and sidewalk or roadway or both dining 
- Display latest covid-19 news 

#### PostMVP  
- Add more filters such as allowing the user to select area by zipcode
- Allow user to choose if they want to see only NY COVID-19 news, US COVID-19 news, or global COVID-19 news.
- Button that drops down to display restaurant reviews

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 17| Project Approval | Incomplete
|August 18| Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 19| Initial Clickable Model  | Incomplete
|August 20| MVP | Incomplete
|August 21| Presentations | Incomplete

## Priority Matrix
https://imgur.com/qJd4A37

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
