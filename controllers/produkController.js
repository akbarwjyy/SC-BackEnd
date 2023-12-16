const models = require("../models");
const { Produk, Produsen } = models;

module.exports = {
  produkA: async (req, res) => {
    const data = await Produk.findAll({ include: Produsen });
    // findAll digunakan untuk mengambil semua catatan dari tabel di database Anda.
    res.status(200).json({
      message: "success",
      data: data,
    });
  },
  produkB: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Produk.findOne({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {}
  },
  produkC: async (req, res) => {
    try {
      const { name, stok } = req.body;
      const add = await Produk.create({ name, stok });
      res.status(200).json({
        message: "success",
        data: add,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  produkD: async (req, res) => {
    try {
      const id = req.params.id;
      await Produk.destroy({
        where: { id },
      });
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  produkE: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, stok } = req.body;
      const produk = await Produk.findOne({
        where: {
          id: id,
        },
      });
      const data = await Produk.update(
        { name, stok },
        {
          where: {
            id: produk.id,
          },
        }
      );
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
