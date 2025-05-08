const express = require("express")
const{
    addIcome,
    getAllIncome,
    deleteIncome,
    downloadIncomeExcel
} = require("../controllers/incomeController");
const {protect} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", protect, addIcome);
router.get("/get", protect, getAllIncome);
router.get("/downloadexcel", protect, downloadIncomeExcel);
router.delete("/:id", protect, deleteIncome);

module.exports = router;