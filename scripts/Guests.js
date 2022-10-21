import { getGuests } from "./database.js";

const guests = getGuests()

export const displayGuests = ()=> {
    let guestsHTML = "<ul>"

    for(const guest of guests){
        guestsHTML+= `<li class="guest--${guest.id}">${guest.fullName}`
    }

    guestsHTML += "</ul>"
    return guestsHTML
}