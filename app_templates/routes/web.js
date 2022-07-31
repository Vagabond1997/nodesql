import express from 'express';
const router = express.Router();
import { homeController,addController,searchController,updateController, deleteController, addStudentController,searchStudentController,updateStudentController } from '../controllers/homeController.js';

router.get('/', homeController);
router.get('/add', addController);
router.get('/search', searchController);
router.get('/update', updateController);
router.get('/delete', deleteController);
router.get('/addStudent',addStudentController);
router.get('/searchStudent',searchStudentController);
router.get('/updateStudent',updateStudentController);
export default router;