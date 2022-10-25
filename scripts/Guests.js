import { getGuests } from "./database.js";
import { getAreas } from "./database.js";

const guests = getGuests()
const areas = getAreas()

export const displayGuests = ()=> {
    let guestsHTML = "<ul>"

    for(const guest of guests){
        guestsHTML+= `<li class="guest--${guest.id}">${guest.fullName}`
    }

    guestsHTML += "</ul>"
    return guestsHTML
}

const guestCount = (p) => {
    let count = []
    // for (const area of areas){
    for (const guest of guests){
        if (guest.areaId === p){
            count.push(guest)
        }
    }
    // }
    return count
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("areaCount")) {
            const [,areaId] = itemClicked.id.split("--")

            for (const area of areas) {
                if (area.id === parseInt(areaId)) {
                    const count = guestCount(parseInt(areaId))
                    window.alert(`There are ${count.length} guests in this area`)
                }
            }
        }
    }
)