import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: string | null = null;

  constructor(private router: Router) {
    this.loadCurrentUser();
  }

  private saveUsers(users: { name: string, surname: string, email: string, phoneNumber: string, password: string }[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  private loadUsers(): { name: string, surname: string, email: string, phoneNumber: string, password: string }[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  private saveCurrentUser(email: string | null): void {
    this.currentUser = email;
    if (email) {
      localStorage.setItem('currentUser', email);
    } else {
      localStorage.removeItem('currentUser');
    }
  }

  private loadCurrentUser(): void {
    this.currentUser = localStorage.getItem('currentUser');
  }

  public register(user: { name: string, surname: string, email: string, phoneNumber: string, password: string }): boolean {
    let users = this.loadUsers();
    const userExists = users.some(u => u.email === user.email);
    if (userExists) {
      return false;
    }
    users.push(user);
    this.saveUsers(users);
    return true;
  }

  public login(email: string, password: string): boolean {
    const users = this.loadUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      this.saveCurrentUser(email);
      return true;
    }
    return false;
  }

  public logout(): void {
    this.saveCurrentUser(null);
    this.router.navigate(['/login']);
  }

  public getCurrentUser(): any {
    const currentUserEmail = localStorage.getItem('currentUser');
    if (!currentUserEmail) return null;

    const users = this.loadUsers();
    return users.find(user => user.email === currentUserEmail) || null;
  }


  public isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  public deleteAccount(): void {
    const currentUser = localStorage.getItem('currentUser');
    let users = this.loadUsers();
    users = users.filter(user => user.email !== currentUser);
    this.saveUsers(users);
    localStorage.removeItem('currentUser');
  }

}
