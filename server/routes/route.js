
import express,{Router} from 'express';
import { deleteuser, getuser } from '../controluser/usercontrol.js';
import {Adduser} from '../controluser/usercontrol.js';
const Route=express.Router();
import { edituser } from '../controluser/usercontrol.js';
import { getusers } from '../controluser/usercontrol.js';

Route.post('/add',Adduser)
Route.get('/all',getusers)
Route.get('/:id',getuser)
Route.put('/:id',edituser)
Route.delete('/:id',deleteuser)
export default Route