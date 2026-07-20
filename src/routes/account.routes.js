const express = require("express")
const { authMiddleware } = require("../middleware/auth.middleware")  
const accountController = require("../controllers/account.controller") 

const { Router } = express
const router = Router()

/**
 * - POST/api/account/ 
 * - Create a new account 
 * - Protected Route
 */

router.post("/", authMiddleware, accountController.createAccountController) 


module.exports = router
