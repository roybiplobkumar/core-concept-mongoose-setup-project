import { z } from "zod";

const creatZodValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string({message:"discription is reqired"}),
    releaseDate: z.string(),
    genre: z.string(),
    isDeleted: z.boolean(),
    viewCount: z.number(),
    slug: z.string().optional(),
    moveName:z.enum(["baba kano chakor", "sathi", "tumi kar"])
  }),
});

export const zodMovieSchema={
  creatZodValidationSchema
}