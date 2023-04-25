import {Component, Input} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() openSnackBar: Function;
  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
    ).subscribe(() => {
      const ar = this.getChild(this.activatedRoute);
      ar.data.subscribe((data: any) => {
        this.titleService.setTitle(data.title)});
    });
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
