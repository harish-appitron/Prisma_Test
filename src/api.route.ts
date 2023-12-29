import {Router} from "express"
import  user from "../src/v1/routes/test"
const router = Router()

router.use("/v1", user)

export default router;