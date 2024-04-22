import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
export var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
export class Alert {
}
export class UserGroupDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRolePageDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRoleDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class AccessManagementConfig {
}
AccessManagementConfig.EndPoint = {
    Organization: {
        getOrganizationList: '/org/organization/all',
        getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3dvcmtmbG93L3NyYy9saWIvcGljcy13b3JrZmxvdy9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLHVCQUF1QixDQUFDOzs7QUFHN0IsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIMUIsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7UUFDL0IseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBR25DLGtGQUFrRjtRQUNsRixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLEtBQUssWUFBWSxlQUFlLEVBQUU7Z0JBQ3BDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO29CQUM3QixzQ0FBc0M7b0JBQ3RDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7aUJBQ25DO3FCQUFNO29CQUNMLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNkO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZSxFQUFFLG9CQUFvQixHQUFHLEtBQUs7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZSxFQUFFLG9CQUFvQixHQUFHLEtBQUs7UUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZSxFQUFFLG9CQUFvQixHQUFHLEtBQUs7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZSxFQUFFLG9CQUFvQixHQUFHLEtBQUs7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxLQUFLLENBQUMsSUFBZSxFQUFFLE9BQWUsRUFBRSxvQkFBb0IsR0FBRyxLQUFLO1FBQ2xFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELEtBQUs7UUFDSCxlQUFlO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQU0sRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7MEdBL0NVLFlBQVk7OEdBQVosWUFBWTs0RkFBWixZQUFZO2tCQUQxQixVQUFVOztBQXNEVCxNQUFNLENBQU4sSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ25CLCtDQUFPLENBQUE7SUFDUCwyQ0FBSyxDQUFBO0lBQ0wseUNBQUksQ0FBQTtJQUNKLCtDQUFPLENBQUE7QUFDVCxDQUFDLEVBTFcsU0FBUyxLQUFULFNBQVMsUUFLcEI7QUFDRCxNQUFNLE9BQU8sS0FBSztDQUdqQjtBQWdCRCxNQUFNLE9BQU8sWUFBWTtJQUl2QixZQUFZLElBQTRCO1FBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxlQUFlO0lBTzFCLFlBQVksSUFBK0I7UUFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLFdBQVc7SUFVdEIsWUFBWSxJQUEyQjtRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sT0FBTztJQVVsQixZQUFZLElBQXVCO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyxzQkFBc0I7O0FBQ25CLCtCQUFRLEdBQUc7SUFDdkIsWUFBWSxFQUFFO1FBQ1osbUJBQW1CLEVBQUUsdUJBQXVCO1FBQzVDLGVBQWUsRUFBRSx5R0FBeUc7S0FDM0g7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG4gIGV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2Uge1xuICAgIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PEFsZXJ0PigpO1xuICAgIHByaXZhdGUga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgIC8vIGNsZWFyIGFsZXJ0IG1lc3NhZ2VzIG9uIHJvdXRlIGNoYW5nZSB1bmxlc3MgJ2tlZXBBZnRlclJvdXRlQ2hhbmdlJyBmbGFnIGlzIHRydWVcbiAgICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XG4gICAgICAgICAgaWYgKHRoaXMua2VlcEFmdGVyUm91dGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIC8vIG9ubHkga2VlcCBmb3IgYSBzaW5nbGUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICB0aGlzLmtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIGFsZXJ0IG1lc3NhZ2VzXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBbGVydCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgdGhpcy5hbGVydChBbGVydFR5cGUuU3VjY2VzcywgbWVzc2FnZSwga2VlcEFmdGVyUm91dGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgdGhpcy5hbGVydChBbGVydFR5cGUuRXJyb3IsIG1lc3NhZ2UsIGtlZXBBZnRlclJvdXRlQ2hhbmdlKTtcbiAgICB9XG5cbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgdGhpcy5hbGVydChBbGVydFR5cGUuSW5mbywgbWVzc2FnZSwga2VlcEFmdGVyUm91dGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIHdhcm4obWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlKSB7XG4gICAgICB0aGlzLmFsZXJ0KEFsZXJ0VHlwZS5XYXJuaW5nLCBtZXNzYWdlLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSk7XG4gICAgfVxuXG4gICAgYWxlcnQodHlwZTogQWxlcnRUeXBlLCBtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcbiAgICAgIHRoaXMua2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZTtcbiAgICAgIHRoaXMuc3ViamVjdC5uZXh0KDxBbGVydD57IHR5cGU6IHR5cGUsIG1lc3NhZ2U6IG1lc3NhZ2UgfSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAvLyBjbGVhciBhbGVydHNcbiAgICAgIHRoaXMuc3ViamVjdC5uZXh0KDxhbnk+e30pO1xuICAgIH1cbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIER5bmFtaWNPYmplY3Qge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIEFsZXJ0VHlwZSB7XG4gICAgU3VjY2VzcyxcbiAgICBFcnJvcixcbiAgICBJbmZvLFxuICAgIFdhcm5pbmdcbiAgfVxuICBleHBvcnQgY2xhc3MgQWxlcnQge1xuICAgIHR5cGUhOiBBbGVydFR5cGU7XG4gICAgbWVzc2FnZSE6IHN0cmluZztcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIEluc2lnaHRzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2VyaWVzOiBTZXJpZXNbXTtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIFNlcmllcyB7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbW9udGg6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBVc2VyR3JvdXBEdG8ge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXJHcm91cER0bz4pIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlUGFnZUR0byB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICByb3V0ZT86IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nIHwgbnVsbDtcbiAgICBvcmRlcj86IG51bWJlcjtcbiAgICBpc21lbnU/OiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXJSb2xlUGFnZUR0bz4pIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlRHRvIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICBvcmRlcj86IG51bWJlcjtcbiAgICBkZWZhdWx0cGFnZT86IFVzZXJSb2xlUGFnZUR0bztcbiAgICBkZWZhdWx0cGFnZWlkPzogbnVtYmVyO1xuICAgIHBhcmVudGlkPzogbnVtYmVyIHwgbnVsbDtcbiAgICBwYXJlbnQ/OiBVc2VyUm9sZUR0byB8IG51bGw7XG4gICAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlclJvbGVEdG8+KSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBVc2VyRHRvIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICBvcmRlcj86IG51bWJlcjtcbiAgICBkZWZhdWx0cGFnZT86IFVzZXJSb2xlUGFnZUR0bztcbiAgICBkZWZhdWx0cGFnZWlkPzogbnVtYmVyO1xuICAgIHBhcmVudGlkPzogbnVtYmVyIHwgbnVsbDtcbiAgICBwYXJlbnQ/OiBVc2VyUm9sZUR0byB8IG51bGw7XG4gICAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlckR0bz4pIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcbiAgICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xuICAgICAgT3JnYW5pemF0aW9uOiB7XG4gICAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvb3JnL29yZ2FuaXphdGlvbi9hbGwnLFxuICAgICAgICBnZXRPcmdhbml6YXRpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xuICAgICAgfVxuICAgIH07XG4gIH1cbiJdfQ==