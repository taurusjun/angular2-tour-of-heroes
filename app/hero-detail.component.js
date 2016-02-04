System.register(['angular2/core', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var injector, HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            injector = core_1.Injector.resolveAndCreate([
                core_1.provide(core_1.EventEmitter, { useFactory: function () {
                        return function () {
                            return new core_1.EventEmitter();
                        };
                    } })
            ]);
            HeroDetailComponent = (function () {
                //dom : BrowserDomAdapter;
                function HeroDetailComponent(_componentRef, dom) {
                    this._componentRef = _componentRef;
                    this.dom = dom;
                    this.eE1 = new core_1.EventEmitter();
                    //this.eE1 = injector.get(EventEmitter);
                    //this.dom = new BrowserDomAdapter();
                }
                HeroDetailComponent.prototype.fireEvent = function () {
                    //this.eE1.emit("AA");
                    var d = this.dom.query("my-hero-detail");
                    //var d2=this._componentRef;
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n      <div *ngIf=\"hero\">\n        <h2>{{hero.name}} details!</h2>\n        <div><label>id: </label>{{hero.id}}</div>\n        <div>\n          <label>name: </label>\n          <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n        </div>\n      </div>\n      <button (click)=\"fireEvent()\">Fire</button>\n    ",
                        inputs: ['hero'],
                        providers: [browser_1.BrowserDomAdapter],
                        events: ['eE1']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, browser_1.BrowserDomAdapter])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map