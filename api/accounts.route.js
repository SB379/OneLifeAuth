import express from 'express';
import AccountsController from "./accounts.controller.js"


const router = express.Router();

router.route("/join").post(AccountsController.apiPostAccount)

export default router