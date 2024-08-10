/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
export type TMoies = {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  isDeleted: boolean;
  viewCount: number;
  slug:string,
};


//  Use Instance method  to create slug 

// Put all user instance methods in this interface:
export type  TMovieMethods= {
  crateSluge(payload:TMoies): string;
}
// Create a new Model type that knows about IUserMethods...
 export type TMovieModel = Model<TMoies, Record<string, unknown>, TMovieMethods>;