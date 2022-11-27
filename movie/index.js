import { Router } from "express";
import {
    listAction,
    removeAction,
    formAction,
    saveAction,
    
    editFormAction,
    updateAction,
}  from './controller.js';

const router = Router();

router.get('/', listAction);
router.get('/delete/:id?', removeAction);
router.get('/form/:id?', formAction);
router.get('/editForm/:id?', editFormAction );
router.patch('/update', updateAction);
router.post('/save', saveAction);

export {router};