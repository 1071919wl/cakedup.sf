import axios from "axios";

export const fetchPickups = () => {
    return axios.get("/api/pickups")
};

// export const fetchOrder = (orderId) => {
//     return axios.get(`/api/orders/${orderId}`)
// }

export const postPickup = (newPickup) => {
    return axios.post("/api/pickups", newPickup)
}

export const updateOrder = (pickupId, pickupUpdates) => {
    return axios.patch(`/api/pickups/${pickupId}`, pickupUpdates)
}

// axios.post("/api/pickups", newPickup)