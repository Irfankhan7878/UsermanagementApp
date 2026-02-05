// import express from 'express';
// import { createUser, updateUser, getAllUsers, deleteUser,updatePartialUser } from '../Controller/userController.js';

// const router = express.Router();

// router.get('/get', getAllUsers);
// router.post('/add', createUser);
// router.put('/update/:id', updateUser);
// router.patch('/update/:id', updatePartialUser);
// router.delete('/delete/:id', deleteUser);
// router.get('/get/:id', (req, res) => {
// });
// export default router;


import express from 'express';
import { createUser, updateUser, getAllUsers, deleteUser, updatePartialUser, getUserById } from '../Controller/userController.js';
import { checkAuth, validUserId, checkById } from '../middleware/auth.js';
import { checkAuth, validUserId, checkById, verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/get', checkAuth, getAllUsers);
router.post('/getbyid', checkById, getUserById); 

// PROTECTED ROUTE: Requires Bearer Token
router.post('/getbyid', verifyToken, checkById, getUserById);

router.post('/add', createUser);
router.put('/update/:id', validUserId, updateUser);
router.patch('/update/:id', validUserId, updatePartialUser);
