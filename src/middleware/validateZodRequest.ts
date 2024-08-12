import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

const validateZodRequest=(schema:AnyZodObject)=>{
  return async(req:Request, res:Response, next:NextFunction)=>{
    try{
      await schema.parse(req.body)
     next()

    }catch{
      next()
    }
  }
}
export default validateZodRequest;