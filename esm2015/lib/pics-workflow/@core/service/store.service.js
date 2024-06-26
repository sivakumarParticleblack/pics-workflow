import { BehaviorSubject } from 'rxjs';
export class Store {
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3dvcmtmbG93L3NyYy9saWIvcGljcy13b3JrZmxvdy9AY29yZS9zZXJ2aWNlL3N0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxNQUFNLE9BQU8sS0FBSztJQUloQixZQUFzQixZQUFlO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFZO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgU3RvcmU8VD4ge1xuICBzdGF0ZSQ6IE9ic2VydmFibGU8VD47XG4gIHByaXZhdGUgX3N0YXRlJDogQmVoYXZpb3JTdWJqZWN0PFQ+O1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihpbml0aWFsU3RhdGU6IFQpIHtcbiAgICB0aGlzLl9zdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGluaXRpYWxTdGF0ZSk7XG4gICAgdGhpcy5zdGF0ZSQgPSB0aGlzLl9zdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXQgc3RhdGUoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlJC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgc2V0U3RhdGUobmV4dFN0YXRlOiBUKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdGUkLm5leHQobmV4dFN0YXRlKTtcbiAgfVxufVxuIl19