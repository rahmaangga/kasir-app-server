import db from "../config/database.js";
import { DataTypes } from "sequelize"


const Pelanggan = db.define ('pelanggan',{
    PelangganID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    NamaPelanggan:{
        type: DataTypes.STRING,
    },
    Alamat:{
        type:DataTypes.TEXT,
    },
    NomorTelepon:{
        type:DataTypes.STRING,
    }
},{
    freezeTableName:true
});

export default Pelanggan;

(async()=>{
    await db.sync();
})();