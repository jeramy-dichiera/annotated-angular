// This is the top level of our app and is referenced in the Angular.json file.

// Import PlatformBrowserDynamic from Angular
// Supports JIT compilation and execution of Angular apps on different supported browsers.
// https://angular.io/api/platform-browser-dynamic
import { platformBrowserDynamic} from "@angular/platform-browser-dynamic";

// Here are importing our AppModule that contains our Angular component.
import { AppModule } from "./app/app.module";

// Here we are bootstrapping our module :)
platformBrowserDynamic().bootstrapModule(AppModule);