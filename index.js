import "dotenv/config";
import CreateTable from "./consts.js";

console.log(process.env.PRIV_KEY);

// TABLELAND BOILERPLATE
import { Wallet } from "ethers";
import { connect } from "@textile/tableland";
// Since we don't have Metamask, supply the private key string directly
const privateKey = process.env.PRIV_KEY;
const signer = new Wallet(privateKey);
const tbl = await connect({ signer, network: "testnet" });

// TODO lit encryption

// const id = await tbl.create(
//   "CREATE TABLE table (name text, id int, primary key (id));"
// );
// let res = await tbl.query(`INSERT INTO ${id} (id, name) VALUES (0, 'Bobby Tables');`);

const tables = await tbl.list();
// [
//     {
//         "controller": "0xbAb12215Ed94713A290e0c618fa8177fAb5eFd2D",
//         "created_at": "2022-02-07T22:57:41.606803Z",
//         "description": "tableland rocks!",
//         "name": "myname_0",
//         "structure": "be1eb905f03347a439ecf9b612632fd53839b7f082dc2f9be6ef7da5dfddd660"
//     }
// ]
console.log(tables);
// res = await tbl.query(`SELECT * FROM ${id}`);

// Concat to one string
let queries = "";

CreateTable().forEach((statement) => {
  // console.log(statement);
  queries += statement;
});

console.log(queries);
