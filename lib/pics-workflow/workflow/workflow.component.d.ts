import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DataStoreService } from '../@core/service/data-store.service';
import { RBACINFO } from '../@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
export declare class WorkflowComponent {
    sanitizer: DomSanitizer;
    private _storeservice;
    safeUrl: SafeResourceUrl;
    environment: any;
    RBACORG: RBACINFO;
    orgSubs: Subscription;
    orgId: any;
    constructor(sanitizer: DomSanitizer, _storeservice: DataStoreService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WorkflowComponent, "lib-workflow", never, {}, {}, never, never>;
}
