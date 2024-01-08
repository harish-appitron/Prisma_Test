import prisma from "../../db";
import {Request, Response} from 'express'
import * as apiResponse from '../helper/apiResponse'

export const createPost = async (req: Request, res: Response) => {
    try {
      const { user_id, title, description }: any = req.body;
  
      const newPost: any = await prisma.post.create({
        data: {
          user_id: user_id,
          title: title,
          description: description
        },
      });
  
      console.log('newPost', newPost);
  
      return res.json({ status: true, Data: [], msg: 'Post created.' });
    } catch (error) {
      console.error(error, 'error');
      return apiResponse.errorMessage(res, 400, 'Something went wrong');
    }
  };

// ====================================================================================================
// ====================================================================================================


export const UpdatePost = async(req:Request, res:Response) => {

    try {
        const userId = req.query.id;
        console.log(userId, "userId");
        
  const { title, description } = req.body;

 await prisma.post.update({
    where: {
      id: Number(userId)
    },
    data: {
      title:title,
      description:description
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

export const allPost = async (req:Request, res:Response) => {
    try {
        const user = await prisma.post.findMany({})

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