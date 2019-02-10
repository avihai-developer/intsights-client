import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: true
})
export class OrderByPipe implements PipeTransform {

    transform(value: any[], key: any): any {
        if (value) {
            value.sort((a, b): number => {
                if (a[key] !== undefined && b[key] !== undefined) {
                    return a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : 1;
                } else {
                    if (a.value[key] !== undefined && b.value[key] !== undefined) {
                        return a.value[key] === b.value[key] ? 0 : a.value[key] < b.value[key] ? -1 : 1;
                    }
                }
                return -1;
            });
        }
        return value;
    }

}
