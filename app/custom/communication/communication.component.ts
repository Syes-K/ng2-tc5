import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'my-custom-communication',
    template: `
        <div>this is Communication</div>
    `
})
export class CommunicationComponent {
    constructor() {
        let clock = Observable.interval(1000);
        let clockHandler = clock.subscribe(t => {
            console.log('clock observable ' + t);
        });
        setTimeout(() => {
            console.log('clock observable end');
            clockHandler.unsubscribe()
        }, 3000);

        var arr = [1, 2, 3, 4,4,4,5,6,4]
        Observable.of<number>(...arr)
        .distinctUntilChanged()
        .filter( (n:number) =>{
            return n%2===0 ;
        })
        .subscribe(i => {
            console.log('of ' + i)
        });
        let fromObs = Observable.from(arr)
        fromObs.distinct()
        .subscribe(i => {
            console.log('from ' + i)
        });
        fromObs.subscribe(i => {
            console.log('from2 ' + i)
        });

        var createdObs = Observable.create(observer => {
            observer.next(1);
            setTimeout(function () {
                observer.next(2);
            }, 1000);
            setTimeout(function () {
                observer.next(2);
            }, 1200);
            setTimeout(function () {
                observer.next(3);
                console.log('observer complete');
                observer.complete();
            }, 2000);
        });
        createdObs.distinctUntilChanged().subscribe(i => {
            console.log('create ' + i);
        })
    }
}