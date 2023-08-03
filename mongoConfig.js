const {MongoClient} = require('mongodb');

const client = new MongoClient(`mongodb+srv://Charan_sai:darling_242726@cluster0.tr74xjt.mongodb.net/charanEdtech`,
{useUnifiedTopplogy:true},
{useNewUrlParser:true},
{connectTimeoutMS:30000},
{ keepAlive:1}
);

const db = client.db();

const Courses = db.collection("Courses");
const Topics = db.collection("T opics");
const Payment = db.collection("Payment");
const Subscriptions = db.collection("Subscriptions");

module.exports= {Courses,Topics,Payment,Subscriptions};
