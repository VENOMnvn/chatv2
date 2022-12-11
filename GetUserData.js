const {MongoClient} = require('mongodb');

const url = process.env.MongoClient;
const Client = new MongoClient(url);
const fs = require('fs');
const process = require('process');
const DataBase = 'Naveen';

async function getDataUser()
{
    let result = await Client.connect();
    let db = result.db(DataBase);
    let collection =await db.collection('UserReact');
    return collection;
}

module.exports =  getDataUser;