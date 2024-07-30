export type TReviews = {
  email: string;
  rating: number;
  comment: string;
};
export type TMoies = {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  isDeleted: boolean;
  viewCount: number;
  reviews: [TReviews];
  sluge: string;
};
