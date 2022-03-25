// Import the Component class from Angular core
// Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.
// https://angular.io/api/core/Component#description
// https://angular.io/guide/architecture#components
import {Component} from "@angular/core";

// This is where your components definition begins. I think about this like we are instantiating
// a Component object and passing in arguments to its constructor.
// There are a number of parameters you can fill here, but for our component
// we are going to keep it very basic and only supply a selector and a templateUrl


@Component({
    // https://angular.io/api/core/Directive#selector
    // This can define the element-name of the component. I say _can_ because it can also be a
    // number of different things - read that documentation!
    // For our example we are going to use the selector to declare the element name.
    // What is written here should match the element name that we used in ../index.html
    selector: 'app-root',
    // https://angular.io/api/core/Component#templateUrl
    // The template is a file that contains the HTML that we will use for this component
    templateUrl: './app.component.html'
})

// We are exporting the class here so we can use it in other places.
// Fun fact, your linter may complain about this class being exported if it is not declared in an
// Angular module. I think about this like we are tossing this class out into our application and
// our IDE is warning us if we arent 'catching' it somewhere
// We will 'catch' this class and use it in ./app.module.ts
export class AppRootComponent {
    title = 'Annotated Angular'
}