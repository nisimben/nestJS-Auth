import { ExceptionFilter, ArgumentsHost, Catch } from "@nestjs/common";
import {HttpException} from '@nestjs/common'
import { Request, Response } from "express";
@Catch(HttpException)
export class HttpExeptionFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const status = 405;

        return response.status(status).json({
            statusCode:status,
            timestamp:new Date().toISOString(),
            path:request.url,
            massage:'Bad - Token'

        });
    }
  
}