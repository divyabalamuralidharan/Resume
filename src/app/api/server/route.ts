import { NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect";
 

export const GET = async (req : any) => {
    try{
        // Connect to the database
        const mongooseConnection = await dbConnect();
        // Access the native MongoDB driver's `db` object
        const db = mongooseConnection.connection.db;
        // Get all the data from the collection
        const data = await db.collection("emp").find().sort({"_id": -1}).toArray();
        return NextResponse.json(data);
    }catch(e){
        console.error(e);
    }
}
export const POST = async (req: Request) => {
    try {
        // Connect to the database
        const mongooseConnection = await dbConnect();
        const db = mongooseConnection.connection.db;

        // Parse the request body
        const body = await req.json();

        // Insert data into the collection
        const result = await db.collection("emp").insertOne(body);

        return NextResponse.json({ message: "Data inserted successfully", insertedId: result.insertedId });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Failed to insert data" }, { status: 500 });
    }
};
