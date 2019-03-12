import { FoInvoiceComponent } from "./fo-invoice/fo-invoice.component";
import { FoOrderProcessComponent } from "./fo-order-process/fo-order-process.component";
import { Routes } from "@angular/router";
import { FoProductsComponent } from './fo-products/fo-products.component';

export const foPages = [
    FoInvoiceComponent,
    FoOrderProcessComponent,
    FoProductsComponent
];


export const foPageRoutes:Routes = [
    {path:'process-order',component:FoOrderProcessComponent},
    {path:'invoice',component:FoInvoiceComponent},
    {path:'products',component:FoProductsComponent}
];