import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, // Lazy Loading von Home
    { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) }, // Lazy Loading für Shop
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }, // Lazy Loading für Contact
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }