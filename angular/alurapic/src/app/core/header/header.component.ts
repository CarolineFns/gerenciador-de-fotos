import { Component } from '@angular/core';

import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user: User;

    constructor(userService: UserService){
        userService.getUser().subscribe(user => this.user = user);
    }
}