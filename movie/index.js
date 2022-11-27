import { Router } from "express";
import {
    listAction,
    removeAction,
    formAction,
    saveAction,
    editFormAction,
}  from './controller.js';

const router = Router();

router.get('/', listAction);
router.get('/delete/:id?', removeAction);
router.get('/form/:id?', formAction);
router.get('/editForm/:id?', editFormAction );
router.post('/save', saveAction);

export {router};