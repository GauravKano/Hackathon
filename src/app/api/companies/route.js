import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function POST(req) {
  
    const { companyName, industry, startDate } = await req.json();
    console.log(companyName, industry, startDate);
    try {
      const client = await clientPromise;
      const db = client.db('Hackathon'); 
      console.log(client);

      // Insert the company data into the collection
      const result = await db.collection('Companies').insertOne({
        companyName,
        industry,
        startDate,
      });

      return NextResponse.json({ message: 'Company information saved!', result });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to save company information' });
    }
}