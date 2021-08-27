import express from "express";
import chatbotController from "../controllers/chatbotController";

let router = express.Router();

let inttWebRoutes = (app) => {
   router.get("/", chatbotController.getHomePage);
   router.get('/setup-profile', chatbotController.setupProfile);
   router.get('/setup-persistent-menu', chatbotController.setupPersistentMenu);
   router.get('/reserve-table', chatbotController.handleReserveTable);
   router.get('/webhook', chatbotController.getWebhook);
   router.post('/webhook', chatbotController.postWebhook);

   return app.use("/", router);
};
module.exports = inttWebRoutes;
