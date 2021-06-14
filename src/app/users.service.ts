import {Injectable} from '@angular/core';
import {CountService} from './count.service';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countService: CountService) {
  }
  onSetToInactive(id: number) {
    this.countService.activeToInactive++;
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
  onSetToActive(id: number) {
    this.countService.inactiveToActive++;
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
