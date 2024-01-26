import db from "../config/database.js";
import { DataTypes } from "sequelize";

const Kategori = db.define(
  "kategori",
  {
    KategoriID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NamaKategori:{
        type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Kategori;

(async () => {
  await db.sync();
})();
