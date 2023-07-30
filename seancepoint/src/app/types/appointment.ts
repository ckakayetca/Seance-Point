import { Seance } from "./seance";
import { User } from "./user";

export interface Appointment {
    _id: string,
    providerId: User,
    userId: string,
    seanceId: Seance,
    date: Date,
    created_at: Date,
    updatedAt: Date,
    __v: number,
}