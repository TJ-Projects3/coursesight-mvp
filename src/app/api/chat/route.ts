import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const result = await streamText({
            model: openai('gpt-4-turbo'),
            system:"You will give students insightful study strategies that will help them succeed in college in a brief, concise manner. You will also provide them with tips on how to manage their time effectively and stay organized. You will also serach Towson courses and prepare them for whatever course they ask for.",
            messages: convertToCoreMessages(messages),
        });

        return result.toDataStreamResponse();
    } catch (error) {
        return new Response('An error occurred', { status: 500 });
    }
}