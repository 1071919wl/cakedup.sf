import axios from "axios";

export const fetchOrders = () => {
    return axios.get("/api/orders")
};

// export const fetchOrder = (orderId) => {
//     return axios.get(`/api/orders/${orderId}`)
// }

export const postOrder = (newOrder) => {
    return axios.post("/api/orders", newOrder)
}

export const updateOrder = (orderId, orderUpdates) => {
    return axios.patch(`/api/orders/${orderId}`, orderUpdates)
}

export const deleteOrder = (orderId) => {
    return axios.delete(`/api/orders/${orderId}`)
}

// CRUD 