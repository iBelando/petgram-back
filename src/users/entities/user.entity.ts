import { Document } from "mongoose";

export class User extends Document {
  _id: string;
  nickname: string;
  name: string;
  birthday: string;
  pictureProfile: string;
  bannerProfile: string;
  biography: string;
  numberOfPosts: number;
  numberOfFollowers: number;
  numberOfFollowed: number;
  email: string;
  password: string;
  raza: string;
  sexo: string;
  phoneNumber: string;
}
