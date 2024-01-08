import { Router, Request } from "express";

import * as Post from "../controller/Post"


const post1 = Router()

post1.post("/insert", Post.createPost)
post1.patch("/update", Post.UpdatePost)
post1.get("/allPost", Post.allPost)


export default post1
