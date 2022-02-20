import 'dotenv/config'
import CreateTable from "./consts.js";

console.log(process.env.PRIV_KEY);

// TABLELAND BOILERPLATE
import { Wallet } from "ethers";
import { connect } from "@textile/tableland";
// Since we don't have Metamask, supply the private key string directly
const privateKey = process.env.PRIV_KEY
const signer = new Wallet(privateKey);
const tbl = await connect({ signer, network: "testnet" });

// lit
// Encrypt what the user is equiping
// let id = await tbl.create(
//   `CREATE TABLE mytable (name text, id int, primary key (id))`
// );

// let res = await tbl.query(`INSERT INTO ${id} (id, name) VALUES (0, 'Bobby Tables');`);

// res = await tbl.query(`SELECT * FROM ${id}`);

// Concat to one string
let queries = "";

CreateTable().forEach((statement) => {
  // console.log(statement);
  queries += statement;
});

console.log(queries);
