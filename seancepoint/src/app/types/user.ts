import { Appointment } from "./appointment";
import { Review } from "./review";
import { Seance } from "./seance";


export interface User {
    _id: string,
    email: string,
    username: string,
    tel: string,
    seances: string[],
    appointments: string[],
    reviews: string[],
    created_at: Date,
    updatedAt: Date,
}