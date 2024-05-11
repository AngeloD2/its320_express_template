// const upload = require('../middleware/upload')
import express from "express";
import listController from "../controllers/listController";

const router = express.Router();

router.route("/").get(listController.getList);
router.route("/create").post(listController.setList);
router.route("/delete").delete(listController.deleteList);

const listRoute = router;

export default listRoute;
