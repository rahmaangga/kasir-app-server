import db from "../config/database.js";
import { DataTypes } from "sequelize";

const Penjualan = db.define(
  "penjualan",
  {
    PenjualanID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TanggalPenjualan: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    TotalHarga: {
      type: DataTypes.DECIMAL,
    },
    PelangganID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Penjualan;

(async () => {
  await db.sync();
})();
