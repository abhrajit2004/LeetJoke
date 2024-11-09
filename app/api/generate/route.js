// import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST() {

    // const body = await request.json();

    // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const prompt =  `Tell me one ${body.type} joke`;

    // const result = await model.generateContent(prompt);
    // return Response.json({joke: result.response.text().replaceAll('\n', '')});

    return Response.json({result: "Currently working on this feature. Please check back later."});
}