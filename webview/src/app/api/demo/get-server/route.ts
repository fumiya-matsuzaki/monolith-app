import { NextRequest, NextResponse } from 'next/server';
import { api } from '@/domain/demo/constant'
import axios from 'axios';


export async function GET(req: NextRequest) {
    const response = await axios.get(`${api.baseURL}${api.V1.getMessage}`);
    return NextResponse.json(response.data);
}
