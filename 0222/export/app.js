import User from './User.js';
import * as Roles from './Role.js';
import completeTask from "./Task";
import {completedCount} from "./Task";

let user = new User('Ted', Roles.USER);
completeTask(user);
console.log(`Total completed ${completedCount}`);
User.prototype.walk = function(){
    console.log(`${this.name} walks`);
};
user.walk();