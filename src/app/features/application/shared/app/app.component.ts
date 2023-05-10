import {Component, OnDestroy, OnInit} from '@angular/core';
import {Mode} from "../../../../core/modules/mode/mode-toggle.model";
import {ModeToggleService} from "../../../../core/modules/mode/mode-toggle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(
    private modeToggleService: ModeToggleService,
    private router: Router
  ) {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  isCollapsed = false;
  currentMode: Mode = Mode.LIGHT;

  mode?: boolean = this.checkMode();

  toggle() {
    console.log(this.currentMode)
    this.modeToggleService.toggleMode();
  }

  checkMode(): boolean {
    return this.currentMode == "light"
  }

  logout() {
    setTimeout(()=> this.router.navigateByUrl('/'), 1000);
  }

}
