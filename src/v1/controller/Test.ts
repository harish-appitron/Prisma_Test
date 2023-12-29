import prisma from "../../db";
import {Request, Response} from 'express'
import * as apiResponse from '../helper/apiResponse'

export const createUser = async(req:Request, res: Response ) => {
    try {
        const {email, name, password } = req.body

        const finduser:any =  await prisma.user1.findUnique({
         where: {
            email :email,
         }
        })
        if (finduser) {
            return apiResponse.errorMessage(res, 400, "email allReady exist")
        }
        const newUser:any = await prisma.user1.create({
            data: {
                name:name,
                email:email,
                password:password
            }
        })
        console.log("newUser", );
        
        return res.json({ status:true, data: newUser, msg: "User created." });

    } catch (error) {
        console.log(error,"error");
        return apiResponse.errorMessage(res, 400, "Something went wrong")
    }
}

// ====================================================================================================
// ====================================================================================================


export const UpdateUser = async(req:Request, res:Response) => {

    try {
        const userId = req.query.id;
        console.log(userId, "userId");
        
  const { name, email, password } = req.body;

 await prisma.user1.update({
    where: {
      id: Number(userId)
    },
    data: {
      name:name,
      email:email,
      password:password
    },
  });

  return res.json({ status: 200, message: "User updated successfully" });
        
    } catch (error) {
        console.log(error,"error");
        return apiResponse.errorMessage(res, 400, "Something went wrong")
    }}

    
// ====================================================================================================
// ====================================================================================================


export const GetUser = async(req: Request, res: Response) => {
    try {
        const userId = req.query.id

    const user =    await prisma.user1.findFirst({
            where : {
                id: Number(userId)
            }
        })

        return res.json({ status: 200, data:user, message: " all user " });

    } catch (error) {
        console.log(error,"error");
        return apiResponse.errorMessage(res, 400, "Something went wrong")
    }
}

// ====================================================================================================
// ====================================================================================================

export const allUser = async (req:Request, res:Response) => {
    try {
        const user = await prisma.user1.findMany({})

        return res.json({ status: 200, data: user });
        
    } catch (error) {
        console.log(error,"error");
        return apiResponse.errorMessage(res, 400, "Something went wrong")
    }
}

// ====================================================================================================
// ====================================================================================================


// * Delete user
export const deleteUser = async (req:Request, res: Response) => {
    const userId = req.query.id;
    await prisma.user1.delete({
      where: {
        id: Number(userId),
      },
    });
  
    return res.json({ status: 200, msg: "User deleted successfully" });
  };