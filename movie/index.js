import { Router } from "express";
import {
    listAction,
    removeAction,
    formAction,
    saveAction,
}  from './controller.js';

const router = Router();

router.get('/', listAction);
router.post('/delete/:id', removeAction);
router.get('/form/:id?', formAction);
router.post('/save', saveAction);

export {router};