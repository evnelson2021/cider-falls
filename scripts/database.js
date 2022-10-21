/*

    This module contains all of the data for the
    application. It exports functions that allow other
    modules to get copies of the data

*/
const database = {
    areas: [{
        id: 1,
        title: "Chamfort River",
        section: "Northeast",
    }, {
        id: 2,
        title: "Lost Wolf Hiking Trail",
        section: "Northern",
    }, {
        id: 3,
        title: "The Lodge, Hotel and Restaurant",
        section: "Northwest",
    }, {
        id: 4,
        title: "Gander River natural preserve",
        section: "Southwest",
    }, {
        id: 5,
        title: "Campgrounds, Office Park, and Children Play Areas",
        section: "Southern",
    }, {
        id: 6,
        title: "Pine Bluffs Trails and Food Vendors",
        section: "Southeast",
    }],

    services: [{
        id: 1, name: "rafting"
    }, {
        id: 2, name: "canoeing"
    }, {
        id: 3, name: "fishing"
    }, {
        id: 4, name: "hiking"
    }, {
        id: 5, name: "picknicking"
    }, {
        id: 6, name: "rock climbing"
    }, {
        id: 7, name: "lodging"
    }, {
        id: 8, name: "parking"
    }, {
        id: 9, name: "information"
    }, {
        id: 10, name: "zip lining"
    }],

    guests: [
        { id: 1, fullName: "John Snow", areaId: 2}, 
        { id: 2, fullName: "Sansa Stark", areaId: 2}, 
        { id: 3, fullName: "Thor Odinson", areaId: 1}, 
        { id: 4, fullName: "Loki Laufeyson", areaId: 1}, 
        { id: 5, fullName: "Jane Foster", areaId: 1}, 
        { id: 6, fullName: "Peter Quill", areaId: 3}, 
        { id: 7, fullName: "Baby Groot", areaId: 3}, 
        { id: 8, fullName: "Rocket Raccoon", areaId: 3}, 
        { id: 9, fullName: "Joey Tribbiani", areaId: 4}, 
        { id: 10, fullName: "Monica Geller", areaId: 4},
        { id: 11, fullName: "Chandler Bing", areaId: 4},
        { id: 12, fullName: "Ross Geller", areaId: 4},
        { id: 13, fullName: "Rachel Green", areaId: 4},
        { id: 14, fullName: "Phoebe Buffay", areaId: 4},
        { id: 15, fullName: "Steve Rogers", areaId: 5},
        { id: 16, fullName: "Peter Parker", areaId: 5},
        { id: 17, fullName: "Bucky Barnes", areaId: 5},
        { id: 18, fullName: "Tony Stark", areaId: 5},
        { id: 19, fullName: "Cersei Lannister", areaId: 6},
        { id: 20, fullName: "Jaime Lannister", areaId: 6}
    ],

    areaServices: [
        { id:1, areaId: 1, serviceId: 1},
        { id:2, areaId: 1, serviceId: 2},
        { id:3, areaId: 1, serviceId: 3},
        { id:4, areaId: 2, serviceId: 4},
        { id:5, areaId: 2, serviceId: 5},
        { id:6, areaId: 2, serviceId: 6},
        { id:7, areaId: 3, serviceId: 5},
        { id:8, areaId: 3, serviceId: 7},
        { id:9, areaId: 3, serviceId: 8},
        { id:10, areaId: 3, serviceId: 9},
        { id:11, areaId: 4, serviceId: 3},
        { id:12, areaId: 4, serviceId: 4},
        { id:13, areaId: 5, serviceId: 7},
        { id:14, areaId: 5, serviceId: 8},
        { id:15, areaId: 5, serviceId: 9},
        { id:16, areaId: 6, serviceId: 4},
        { id:17, areaId: 6, serviceId: 5},
        { id:18, areaId: 6, serviceId: 10}
    ]
}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getAreaServices = () => {
    return database.areaServices.map(offerings => ({...offerings}))
}