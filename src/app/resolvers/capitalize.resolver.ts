import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CapitalizeResolver implements Resolve<string> {
    constructor() { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return of(`${route.paramMap.get('name').toUpperCase()}`);
    }
}
