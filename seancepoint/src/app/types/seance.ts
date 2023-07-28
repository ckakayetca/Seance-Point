export interface Seance {
    _id: string,
    title: string,
    description: string,
    type: string,
    price: number,
    duration: number,
    postedBy: string,
    created_at: Date,
    updatedAt: Date,
    __v: number,
}