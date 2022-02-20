
// import { connect } from "@textile/tableland";

// const tbl = await connect({ network: "testnet" });

// lit
// Encrypt what the user is equiping
// let id = await tbl.create(
//   `CREATE TABLE mytable (name text, id int, primary key (id))`
// );

// let res = await tbl.query(`INSERT INTO ${id} (id, name) VALUES (0, 'Bobby Tables');`);

// res = await tbl.query(`SELECT * FROM ${id}`);

function CreateTable() {
    let tableId = "faux";
    return GiveTraits().map(trait => {
        return `INSERT INTO ${tableId} (Trait, Strength, Stealth, Charm, Speed) VALUES ('${trait.name}', ${trait.strength}, ${trait.stealth}, ${trait.charm}, ${trait.speed});`;
    });
}

// Concat to one string
let queries = "";

CreateTable().forEach(statement => {
    // console.log(statement);
    queries += statement
});

console.log(queries)
