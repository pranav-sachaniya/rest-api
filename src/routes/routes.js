import { Router } from 'express';

import {
	getRequest, getIdData, postRequest, delRequest, updateRequest,
} from '../controller/auth'; // import controller

const router = Router(); // instance for route

// routing using method
router.get('/gets', getRequest);

// get data by id
router.get('/gets/:id', getIdData);

// routing using post method
router.post('/posts', postRequest);

// routing for delete request
router.delete('/del/:id', delRequest);

// routing for update request
router.put('/update/:id', updateRequest);

export default router; // export module
