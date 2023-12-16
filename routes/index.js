const express = require("express");
const router = express.Router();
const produkRouter = require("./produk.route");
const produsenRouter = require("./produsen.route");

router.use("/produk", produkRouter);
router.use("/produsen", produsenRouter);
// router.use() digunakan untuk memasang middleware untuk rute yang dilayani oleh router tertentu
// tempat kumpulan dari router-router yang kita buat

module.exports = router;
