import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-workflow/@core/permissions/permission.store';
import { DataStoreService } from './pics-workflow/@core/service/data-store.service';
import { RBACINFO } from './pics-workflow/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
export declare class WorkflowComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    n8nEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WorkflowComponent, "workflow", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "n8nEvent": "n8nEvent"; }, {}, never, never>;
}
