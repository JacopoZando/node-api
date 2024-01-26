import {Request, Response, Router} from "express";

const router = Router();

router.get("/", (req:Request, res:Response) => {
    res.send("Benvenuti sul blog REST API");
});

router.get("/contatti", (req:Request, res:Response) => {
    res.send("Contattaci per saperne di più");
});

export default router;