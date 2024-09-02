import { Component } from "@angular/core";


@Component({
    selector:'app-header',
    standalone : true,
    templateUrl : './header.component.html'
})

export class AppHeader {
    title : string = "This is the title of the Header"
}