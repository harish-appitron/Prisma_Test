import { Router, Request } from "express";

import * as test from "../controller/Test"


const user = Router()

user.post("/Signup", test.createUser)
user.patch("/updated", test.UpdateUser)
user.get("/Get", test.GetUser)
user.delete("/delete", test.deleteUser)
user.get("/GetAllUser", test.allUser)

export default user
