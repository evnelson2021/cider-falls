import { getServices } from "./database.js";
import { getAreas } from "./database.js";
import { getAreaServices } from "./database.js";
// import { areaList } from "./Areas.js"

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

export const ServiceList = () => {
    let servicesList = `Park services:`
    for (const service of services) {
        servicesList += `<item id="service--${service.id}"> ${service.name}. `
    }
    servicesList += `</item>`
    return servicesList
}


export const displayAreaServices = () =>{
    let servicesHTML = ``
    for (const area of areas){
        servicesHTML += `<article class="each-area"><h3 id="areaCount--${area.id}">${area.title}</h3></n>
                        <header>Services Offered: </header> <ul>`
        for (const areaService of areaServices){
            if (area.id === areaService.areaId){
                for(const service of services){
                    if (service.id === areaService.serviceId){
                        servicesHTML += `</t><li>${service.name}</li>`
                    }
                }
            }
        }
        servicesHTML += `</ul>`
        servicesHTML += `</article>`
    }
    return servicesHTML
}

const filterServicesbyArea = (p) => {
    const matches = []
    for (const match of areaServices){
        if (match.serviceId === p){
            matches.push(match)
        }
    }
    return matches
}

const assignedAreaNames = (filterService) => {
    let serviceLocation = ``
    // iterate serviceId to match parkAreaId
    for (const area of areas) {
        for (const taco of  filterService){
        if (taco.areaId === area.id) {
            serviceLocation += `${area.title}. `
        }
    }
}
    return serviceLocation
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceId] = itemClicked.id.split("--")

            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    const matched = filterServicesbyArea(parseInt(serviceId))
                    const area = assignedAreaNames(matched)
                    // console.log(areas)
                    window.alert(`${service.name} is available in ${area}`)
                }
            }
        }
    }
)