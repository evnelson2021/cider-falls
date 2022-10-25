// import { getAreas, getGuests, getServices, getAreaServices } from "./database";
import { displayGuests } from "./Guests.js";
// import {displayAreas} from "./Areas.js"
import { displayAreaServices } from "./Services.js";
import { ServiceList } from "./Services.js";

// const showMe = displayAreaServices()
// console.log(showMe)

const mainContainer = document.querySelector("#wholePage")

const applicationHTML = `
<article class="asides">
<div class="park-services">${ServiceList()}</div>   
    <h2>Areas</h2>

<section class= "left-areas">
        <div class="area-items">${displayAreaServices()}</div>
    </section> 

    <section class="right-guests">
    <h2 class="guests">Guests</h2>
    ${displayGuests()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML   


// extra stuff:
// <article class="details">
//     <section class="detail--column list details__cities">
//         <h2>Cities with Service</h2>
//         ${CityList()}
//     </section>
//     <section class="detail--column list details__cities">
//         <h2>Walkers</h2>
//         ${Walkers()}
//     </section>
//     <section class="detail--column list details__cities">
//         <h2>Pets</h2>
//         ${RegisteredPets()}
//     </section>
// </article>


// Algorithmic Thinking:
// Areas need to be put into a flexbox that will display as a grid of 2 rows, 3 columns - Areas.js
// This should be added to the main content area and left aligned
// Every Area should have a Title and the services it provides below
// Guests should be listed in a separate box int he main content area and right aligned
// Services should be listed below the Areas that include that service
// 
// create two functions and call both inside event listener for click and show services within each area

