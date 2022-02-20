import "dotenv/config";
import CreateTable from "./consts.js";
import LitJsSdk from "lit-js-sdk/build/index.node.js";
import { Wallet } from "ethers";
import { connect } from "@textile/tableland";

// TABLELAND BOILERPLATE
// Since we don't have Metamask, supply the private key string directly
const privateKey = process.env.PRIV_KEY;
const signer = new Wallet(privateKey);
const tbl = await connect({ signer, network: "testnet" });

console.log(process.env.PRIV_KEY);
// TODO lit encryption
let litNodeClient = new LitJsSdk.LitNodeClient({
  alertWhenUnauthorized: false,
});
await litNodeClient.connect();

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
