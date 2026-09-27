import { Request, Response, Router } from "express";

const router = Router();

router.post("/users", (req: Request, res: Response) => {
    res.json({message: "funcionando"})
});

export {router};