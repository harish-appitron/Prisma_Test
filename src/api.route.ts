import {Router} from "express"
import  user from "../src/v1/routes/test"
import post from "../src/v1/routes/postroute"
const router = Router()

router.use("/v1", user)
router.use("/v2", post)

export default router;