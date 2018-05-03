import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { UserService } from '../../service/user.service';
import { Menu } from '../../models/menu';
import { User } from '../../models/user';

@Component({
  selector: 'prodesp-gsnet-monitor',
  templateUrl: './prodesp-gsnet-monitor.component.html',
  styleUrls: ['./prodesp-gsnet-monitor.component.css']
})
export class ProdespGsnetMonitorComponent implements OnInit {

  @Input()logoUser: string;
  @Input()navbarBrand: string; // : '/Prodesp.Monitor/Home/Index';
  @Input()navbarLogo: string;
  menus: Menu[] = [];
  user: User;
  constructor(private userService: UserService, private menuService: MenuService) { }

  ngOnInit() {
    this.menus = this.menuService.getMenus() || [];
    let user = this.userService.getUser();
    if (!user) {
      user = {} as User ;
    }
    this.user = user;
  }

}
