import { getServices } from "./database.js";
import { getAreas } from "./database.js";
import { getAreaServices } from "./database.js";

const areas = getAreas()
const services = getServices()
const areaServices = getAreaServices()

// const filterAreaServicesbyArea = (area) => {
//     // Define an empty array to store all of the assignment objects
//     const matches = []
//     // Iterate the array value of walkerCities
//     for (const match of areaServices){
//         if (match.areaId === area.id){
//             matches.push(match)
//         }
//         return matches
//     }
// }




export const displayAreaServices = () =>{
    let servicesHTML = `<article class="all-areas"><div class="each-item"><ul>`
    for (const area of areas){
        servicesHTML += `<h2 class="area-titles">${area.title}</h2></n>
                        </t><header>Services Offered:</header></n>`
        // servicesHTML += `<div class="area--${area.id}">${area.title}</div>`
        for (const areaService of areaServices){
            if (area.id === areaService.areaId){
                for(const service of services){
                    if (service.id === areaService.serviceId){
                        // servicesHTML += `<li class="service--${service.id}">${service.name}</li>`
                        servicesHTML += `</t><li>${service.name}</li>`
                    }
                }
            }
        }
    }
    servicesHTML += `</ul></div></article>`
    return servicesHTML
}


// export const displayAreaServices = () =>{
//     let servicesHTML = "<ul>"
//     for (const area of areas){
//         // servicesHTML += `<div class="area--${area.id}">${area.title}</div>`
//         for (const areaService of areaServices){
//             for(const service of services){
//                 if (area.id === areaServices.areaId)
//                 if (service.id === areaService.serviceId){
//                     // servicesHTML += `<li class="service--${service.id}">${service.name}</li>`
//                     servicesHTML += `<li>${service.name}</li>`
//                 }
//             }
//         }
//     }
//     servicesHTML += `</ul>`
//     return servicesHTML
// }