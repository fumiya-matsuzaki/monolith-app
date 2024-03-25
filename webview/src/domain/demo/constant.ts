export const api = {
    baseURL: process.env.WEBAPI_BASE_URL ?? 'http://localhost:8000',
    V1: {
        getMessage: '/webapi/v1/demo/message'
    }
};