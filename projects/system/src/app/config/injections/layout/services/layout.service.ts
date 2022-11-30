import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ILayout } from "../interfaces/layout.interface";
import { LAYOUT_TOKEN } from "../tokens/layout.token";

@Injectable({
    providedIn: "root"
})
export class LayoutService {
    private configSubject : BehaviorSubject<ILayout>

    constructor(@Inject(LAYOUT_TOKEN) private config : ILayout){
        this.configSubject = new BehaviorSubject<ILayout>(config);
    }

    set Configuration(config : any){
        this.configSubject.next(config)
    }

    get Configuration() : Observable<ILayout>{
        return this.configSubject.asObservable();
    }
}