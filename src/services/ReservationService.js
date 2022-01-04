import axios from "axios";

const Reservation_API_BASE_URL = "http://localhost:9000/api/reserv/reservations";

class ReservationService {

    getReservations() {
        return axios.get(Reservation_API_BASE_URL);
    }
    createReservation(Reservation) {
        return axios.post(Reservation_API_BASE_URL, Reservation);

    }
}

export default new ReservationService()
