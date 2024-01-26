import db from "../config/database.js";
import { DataTypes } from "sequelize";

const DetailPenjualan = db.define('detail_penjualan', {
  DetailID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PenjualanID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ProdukID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  JumlahProduk: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Subtotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

export default DetailPenjualan;

(async () => {
  await db.sync();
})();