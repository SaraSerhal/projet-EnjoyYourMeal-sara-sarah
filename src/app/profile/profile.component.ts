import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: any = null;

  constructor(protected userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  public deleteAccount() {
    if (confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      this.userService.deleteAccount();
      this.router.navigate(['/registration']); // Redirige vers l'inscription après suppression
    }
  }


}
