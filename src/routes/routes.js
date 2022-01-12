import { Router } from 'express';

import {
	fetchUserData, getIdData, sendUserData, delUserData, updateUserData,
} from '../controller/auth'; // import controller

const router = Router(); // instance for route

// routing using method
router.get('/fetchUser', fetchUserData);

// get data by id
router.get('/fetchUser/:id', getIdData);

// routing using post method
router.post('/sendUser', sendUserData);

// routing for delete request
router.delete('/delUser/:id', delUserData);

// routing for update request
router.put('/updateUser/:id', updateUserData);

export default router; // export module
