/**
 * Created by kuangyongsheng on 16/8/24.
 */
import {Injectable} from '@angular/core';
import {Hero} from './hero.class';
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

const  HEROES:Hero[]=[
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
]

@Injectable()
export  class HeroService{
    private heroesUrl = 'app/heroes1';  // URL to web api

    constructor(private h:Http){

    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    getHeroes():Promise<Hero[]> {
        // return Promise.resolve(HEROES);
        // return new Promise<Hero[]>(resolve=>{
        //     setTimeout(()=>resolve(HEROES),2000)
        // });
        return this.h.get(this.heroesUrl).toPromise().then(res=>{
            return res.json().data as Hero[];
        }).catch(this.handleError);
    }
    getHero(id):Promise<Hero>{
        let url = `${this.heroesUrl}/${id}`;
        return this.h.get(url).toPromise().then(res=>{
            return res.json().data as Hero;
        }).catch(this.handleError);
    }
    update(hero:Hero):Promise<void>{
        let url = `${this.heroesUrl}/${hero.id}`;
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.h.post(url,JSON.stringify(hero),headers).toPromise().then(res=>{
            return null;
        }).catch(this.handleError);
    }

}