import {config} from "dotenv";
config();
import express, { NextFunction, Request, Response} from "express";
import indexRouter from "./routes/index";
const app = express();
const port = Number(process.env.PORT) || 3000; //questa la possiamo mettere come variabile d'ambiente

/* app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Ciao!");
}); */

//qui gli dico che per tutto ciò che arriva con una slash, di amdare a cercare in routes se c'è qualcosa
app.use("/", indexRouter); 

//mettiamo in ascolto
app.listen(port, () => {
    console.log(`Server in ascolto su hht://localhost:${port}`);
});
