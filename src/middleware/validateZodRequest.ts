import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

const validateZodRequest=(schema:AnyZodObject)=>{
  return async(req:Request, res:Response, next:NextFunction)=>{
    try{
      const paseBody=await schema.parse(req.body)
      req.body=paseBody
     next()

    }catch{
      next()
    }
  }
}
export default validateZodRequest;