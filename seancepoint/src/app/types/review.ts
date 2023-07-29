import { User } from "./user";

export interface Review {
    seance: string,
    postedBy: User,
    rating: number,
    text: string,
    created_at: string,
}

export interface ReviewRaw {
    seance: string,
    postedBy: string,
    rating: number,
    text: string,
}