const express = require("express");
const app = express();
const port = 3000;
const Route = require("./routes");

app.use(express.json());

app.use(Route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
/**server HTTP dengan Express, menggunakan middleware untuk memproses JSON,
 * dan memiliki rute-rute yang dikelola oleh modul "routes". Server mendengarkan
 * pada port 3000 dan mencetak pesan ke konsol ketika berhasil berjalan.
 */
