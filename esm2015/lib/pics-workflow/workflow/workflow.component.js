import { Component } from '@angular/core';
import { RBACINFO } from '../@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../@core/service/data-store.service";
export class WorkflowComponent {
    constructor(sanitizer, _storeservice) {
        this.sanitizer = sanitizer;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
        // This is intentional - The code has been reviewed and does not pose a risk. It does not need to be modified.
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.environment) {
                    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.environment.n8nWorflowUrl);
                }
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
}
WorkflowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WorkflowComponent, deps: [{ token: i1.DomSanitizer }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
WorkflowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: WorkflowComponent, selector: "lib-workflow", ngImport: i0, template: "\n<iframe\n  title=\"workflow\"\n  [src]=\"safeUrl\"\n  class=\"workflow-iframe\"\n  width=\"100%\"\n  webkitallowfullscreen\n  mozallowfullscreen\n  allowfullscreen></iframe\n>;", styles: [".workflow-iframe{height:100vh;width:100%}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WorkflowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-workflow',
                    templateUrl: './workflow.component.html',
                    styleUrls: ['./workflow.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: i2.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2Zsb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvd29ya2Zsb3cvc3JjL2xpYi9waWNzLXdvcmtmbG93L3dvcmtmbG93L3dvcmtmbG93LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3dvcmtmbG93L3NyYy9saWIvcGljcy13b3JrZmxvdy93b3JrZmxvdy93b3JrZmxvdy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQU96RCxNQUFNLE9BQU8saUJBQWlCO0lBUTVCLFlBQW1CLFNBQXVCLEVBQVUsYUFBK0I7UUFBaEUsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUxuRixZQUFPLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQU1oQyw4R0FBOEc7UUFDOUcsSUFBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN0RSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztvQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQzlGO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRixRQUFRO0lBRVAsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7OytHQTFCVSxpQkFBaUI7bUdBQWpCLGlCQUFpQixvRENYOUIsb0xBU0U7NEZERVcsaUJBQWlCO2tCQUw3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixXQUFXLEVBQUUsMkJBQTJCO29CQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBSQkFDSU5GTyB9IGZyb20gJy4uL0Bjb3JlL3VybHMvcmJhYy11cmwuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXdvcmtmbG93JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dvcmtmbG93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd29ya2Zsb3cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXb3JrZmxvd0NvbXBvbmVudCAge1xuICBzYWZlVXJsITogU2FmZVJlc291cmNlVXJsO1xuICBlbnZpcm9ubWVudDogYW55O1xuICBSQkFDT1JHOiBSQkFDSU5GTyA9IG5ldyBSQkFDSU5GTygpO1xuICBvcmdTdWJzITogU3Vic2NyaXB0aW9uO1xuICBvcmdJZDogYW55O1xuXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcbiAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbCAtIFRoZSBjb2RlIGhhcyBiZWVuIHJldmlld2VkIGFuZCBkb2VzIG5vdCBwb3NlIGEgcmlzay4gSXQgZG9lcyBub3QgbmVlZCB0byBiZSBtb2RpZmllZC5cbiAgICAgdGhpcy5vcmdTdWJzID0gIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc1snUkJBQ09SRyddICYmIHJlc1snUkJBQ09SRyddICE9PSAnJykge1xuICAgICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IHRoaXMuUkJBQ09SR1snZW52aXJvbm1lbnQnXTtcbiAgICAgICAgdGhpcy5vcmdJZCA9IHBhcnNlSW50KHRoaXMuUkJBQ09SR1snb3JnSUQnXSk7XG4gICAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnQpe1xuICAgICAgICAgIHRoaXMuc2FmZVVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh0aGlzLmVudmlyb25tZW50Lm44bldvcmZsb3dVcmwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMub3JnU3Vicy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJcbjxpZnJhbWVcbiAgdGl0bGU9XCJ3b3JrZmxvd1wiXG4gIFtzcmNdPVwic2FmZVVybFwiXG4gIGNsYXNzPVwid29ya2Zsb3ctaWZyYW1lXCJcbiAgd2lkdGg9XCIxMDAlXCJcbiAgd2Via2l0YWxsb3dmdWxsc2NyZWVuXG4gIG1vemFsbG93ZnVsbHNjcmVlblxuICBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWVcbj47Il19