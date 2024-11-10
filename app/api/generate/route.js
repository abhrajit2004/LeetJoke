import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {

    // const body = await request.json();

    // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const prompt =  `Tell me one ${body.type} joke which should be different from the previous one.`;

    // const result = await model.generateContent(prompt);

    return Response.json({success: true, joke: 'I am currently working on this'});
}