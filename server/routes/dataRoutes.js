import { Router } from "express";
import { InsertData } from "../Controllers/dataController.js";
import { carData } from "../Controllers/dataController.js";

function dataRoutes () {

    const router = Router();

    router.post('/insert',InsertData);

    router.get('/cardata',carData);

    return router;

};


export default dataRoutes;