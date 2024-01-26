import db from "../config/database.js";
import { DataTypes } from "sequelize"

const Produk = db.define('produk',{
    ProdukID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    NamaProduk:{
        type: DataTypes.STRING
    },
    Harga:{
        type: DataTypes.DECIMAL,
    },
    Stok:{
        type : DataTypes.INTEGER
    },
    foto:{
        type :DataTypes.STRING,
    },
    url:{
        type: DataTypes.STRING
    }, 
},{
    freezeTableName:true
});

export default Produk;

(async()=>{
    await db.sync();
})();
