const router = require('express').Router();

const { getAllEmployees, editUserById, deleteEmployee, getEmployeesByFilter, createNewUser } = require('./userController');

/**
 * /api/users:
 *  get:
 *   description: Get all users with filters
 *  responses:
 *  200:
 *  description: Success
 * 500:
 * description: Internal Server Error 
 * 
 * Params: query options
 */
router.get('/', getAllEmployees);

/**
 * /api/users:
 *  post:
 *   description: Edit Users 
 *  responses:
 *  200:
 *  description: Success
 * 500:
 * description: Internal Server Error 
 * 
 * Params: query options
 */
router.post('/', editUserById);

/**
 * /api/users/filter:
 *  post:
 *   description: get Users By filter
 *  responses:
 *  200:
 *  description: Success
 * 500:
 * description: Internal Server Error 
 * 
 * Params: query options
 */
router.post('/filter', getEmployeesByFilter);

/**
 * /api/users:
 *  post:
 *   description: This end-point delte user by id 
 *  responses:
 *  200:
 *  description: Success
 * 500:
 * description: Internal Server Error 
 * 
 * Params: query options with iduser
 */
router.delete('/', deleteEmployee);

/**
 * /api/users:
 *  post:
 *   description: this end-point Create a new employee
 *  responses:
 *  200:
 *  description: Success
 * 500:
 * description: Internal Server Error 
 * 
 * Params: query options with information of user
 */
router.post('/create', createNewUser);

module.exports = router;



