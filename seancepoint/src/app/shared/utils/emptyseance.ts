import { Seance } from "../../types/seance";
import { User } from "../../types/user";

export const emptyUser: User = {
    _id: '',
    email: '',
    username: '',
    tel: '',
    seances: [],
    appointments: [],
    reviews: [],
    created_at: new Date(),
    updatedAt: new Date(),
  }
export const emptySeance: Seance = {
    _id: '',
    title: '',
    description: '',
    type: '',
    price: 0,
    duration: 0,
    postedBy: {
      _id: '',
      email: '',
      username: '',
      tel: '',
      seances: [],
      appointments: [],
      reviews: [],
      created_at: new Date(),
      updatedAt: new Date(),
    },
    created_at: new Date(),
    updatedAt: new Date(),
    __v: 0,
    reviews: [],
    appointments: [],
  }