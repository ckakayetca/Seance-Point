import { Appointment } from "./appointment";
import { Review } from "./review";
import { Seance } from "./seance";


export interface User {
    email: string,
    username: string,
    tel: string,
    seances: Seance[],
    appointments: Appointment[],
    reviews: Review[]
}