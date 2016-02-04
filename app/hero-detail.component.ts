import {Component, EventEmitter, ElementRef, Injector,provide } from 'angular2/core';
import {BrowserDomAdapter} from 'angular2/platform/browser';
import {Hero} from './hero';

var injector = Injector.resolveAndCreate([
    provide(EventEmitter, {useFactory: ()=> {
        return ()=>{
            return new EventEmitter();
        }
    }})
]);

@Component({
    selector: 'my-hero-detail',
    template: `
      <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
      </div>
      <button (click)="fireEvent()">Fire</button>
    `,
    inputs: ['hero'],
    providers: [BrowserDomAdapter],
    events: ['eE1']
})
export class HeroDetailComponent {
    public hero: Hero;
    public eE1: EventEmitter<any>;
    //dom : BrowserDomAdapter;

    constructor(private _componentRef: ElementRef, private dom : BrowserDomAdapter){
        this.eE1 = new EventEmitter();
        //this.eE1 = injector.get(EventEmitter);
        //this.dom = new BrowserDomAdapter();
    }
    fireEvent(){
        //this.eE1.emit("AA");
        var d=this.dom.query("my-hero-detail");
        //var d2=this._componentRef;
    }
}
