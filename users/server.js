const users = require("./server")
const { Router } = require("express")
const express = require("express")

const router =express(Router)



router.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})
