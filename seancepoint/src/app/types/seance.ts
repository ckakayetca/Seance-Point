import { Appointment } from "./appointment";
import { Review } from "./review";
import { User } from "./user";

export interface Seance {
    _id: string,
    title: string,
    description: string,
    type: string,
    price: number,
    duration: number,
    postedBy: User,
    created_at: Date,
    updatedAt: Date,
    __v: number,
    reviews: Review[],
    appointments: Appointment[],
}

export interface SeanceRaw {
    title: string,
    description: string,
    type: string,
    price: number,
    duration: number,
}