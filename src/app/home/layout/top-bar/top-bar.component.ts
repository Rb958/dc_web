import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../core/utils/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  username: string;
  constructor(
    private ts: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = this.ts.getUsername();
  }

  logout() {
    this.ts.logout();
    this.router.navigateByUrl('/account')
  }
}
