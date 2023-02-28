import * as dotenv from 'dotenv';
const configEnv = () => dotenv.config();

configEnv();

export const ENV = {
    openAIKey: process.env.OPENAI_API_KEY,
    dreamStudioKey: process.env.DREAMSTUDIO_API_KEY
};
