const express = require("express");
const router = express.Router();
const {
  produkA,
  produkB,
  produkC,
  produkD,
  produkE,
} = require("../controllers/produkController");

router.get("/", produkA);
router.get("/:id", produkB);
router.post("/", produkC);
router.delete("/:id", produkD);
router.patch("/:id", produkE);

// router.get untuk meminta data dari produkA dan id produkB. Dan meminta router.post untuk,
// router.post untuk mengirimkan data ke produkC untuk diproses.
// router.dalete untuk menghapus data
// router.patch digunakan untuk melakukan hanya sebagai resource ke sebuah server.

module.exports = router;
