import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, Body } from '@nestjs/common';

@Injectable()
export class UpperCasePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {

        value = value.toUpperCase()
        return value
    }
}