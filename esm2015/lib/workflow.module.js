import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-workflow/@core/permissions/permission.store';
import { AlertService } from './pics-workflow/@core/service/alert.service';
import { DataStoreService } from './pics-workflow/@core/service/data-store.service';
import { HttpService } from './pics-workflow/@core/service/http.service';
import { PicsWorkflowModule } from './pics-workflow/pics-workflow.module';
import { WorkflowComponent } from './workflow.component';
import * as i0 from "@angular/core";
export class CardiWorkflowModule {
}
CardiWorkflowModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiWorkflowModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardiWorkflowModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiWorkflowModule, declarations: [WorkflowComponent], imports: [PicsWorkflowModule], exports: [WorkflowComponent] });
CardiWorkflowModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiWorkflowModule, providers: [HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
            PicsWorkflowModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiWorkflowModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        WorkflowComponent
                    ],
                    imports: [
                        PicsWorkflowModule
                    ],
                    exports: [
                        WorkflowComponent
                    ],
                    providers: [HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2Zsb3cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvd29ya2Zsb3cvc3JjL2xpYi93b3JrZmxvdy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQWdCekQsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQVY1QixpQkFBaUIsYUFHakIsa0JBQWtCLGFBR2xCLGlCQUFpQjtrSEFJUixtQkFBbUIsYUFGbkIsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsWUFOakc7WUFDUCxrQkFBa0I7U0FDbkI7NEZBTVUsbUJBQW1CO2tCQVovQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO29CQUNELFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDM0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3Mtd29ya2Zsb3cvQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL3BpY3Mtd29ya2Zsb3cvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3Mtd29ya2Zsb3cvQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL3BpY3Mtd29ya2Zsb3cvQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGljc1dvcmtmbG93TW9kdWxlIH0gZnJvbSAnLi9waWNzLXdvcmtmbG93L3BpY3Mtd29ya2Zsb3cubW9kdWxlJztcbmltcG9ydCB7IFdvcmtmbG93Q29tcG9uZW50IH0gZnJvbSAnLi93b3JrZmxvdy5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgV29ya2Zsb3dDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFBpY3NXb3JrZmxvd01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgV29ya2Zsb3dDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbSHR0cENsaWVudCwgSHR0cFNlcnZpY2UsIEFsZXJ0U2VydmljZSwgQ29uZmlybWF0aW9uU2VydmljZSwgUGVybWlzc2lvblN0b3JlLCBEYXRhU3RvcmVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkaVdvcmtmbG93TW9kdWxlIHsgfVxuIl19