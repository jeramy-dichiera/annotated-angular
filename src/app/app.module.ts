// Import the NgModule from Angular core
// NgModules are containers for a cohesive block of code dedicated to an application domain,
// a workflow, or a closely related set of capabilities.
// As always - check out the official docs!
// https://angular.io/api/core/NgModule
// https://angular.io/guide/architecture-modules

import { NgModule} from "@angular/core";

// Import BrowserModule from Angular platform browser
// which exports required infrastructure for all Angular apps.
//https://angular.io/api/platform-browser/BrowserModule

import { BrowserModule} from "@angular/platform-browser";

// Import the AppRootComponent that we created in ./app.component.ts

import { AppRootComponent } from "./app.component";


// Here we are defining the NgModule and passing in some specifics about the configuration
// This is similar to what we did with the Component in ./app.component.ts
@NgModule({
    // The set of components, directives, and pipes (declarables) that belong to this module.
    // In this case we only have one component for this module - ./app.component.ts
    // https://angular.io/api/core/NgModule#declarations
    declarations: [
        AppRootComponent
    ],

    // The set of NgModules whose exported declarables are available to templates in this module.
    // We want the BrowserModule to be available to places that use this module, so we list it here.
    // https://angular.io/api/core/NgModule#imports
    imports: [
        BrowserModule
    ],

    // The set of injectable objects that are available in the injector of this module.
    // We arent injecting any objects in this module, so this is left empty
    // https://angular.io/api/core/NgModule#providers
    providers: [],

    // The set of components that are bootstrapped when this module is bootstrapped.
    // The components listed here are automatically added to entryComponents.
    // We have our one component and we need it to be bootstrapped
    // Bootstrapping is a fancy word for 'booting' or loading and in Angular this means the Angular
    // app is creating and inserting the module into the index.html
    // https://angular.io/api/core/NgModule#bootstrap
    // https://angular.io/guide/bootstrapping
    bootstrap: [AppRootComponent]
})

// When we export here we are making all the 'parts' of this module available to our angular app
export class AppModule{}