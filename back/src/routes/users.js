const router = require('express').Router()
const authentificationModdleware = require('../middlewares/tokenCheck')
const {
	logIn,
	getUser,
	updateItemByID,
	createUser,
	updateUser,
	deleteUser,
	getUsersData,
	updatePosts,
	getItemById,
	getAllItems,
	checktoken,
	deteteItemPhoto,
	deleteItem,
	addReview,
} = require('../controllers/users')

router.get('/users/:userID', getUser)
router.get('/getUsersData', getUsersData)
router.get('/getItem/:itemID', getItemById)
router.get('/getAllItems', getAllItems)

router.post('/checkToken/:userID', authentificationModdleware, checktoken)

router.post('/create_user', createUser)
router.post('/authUser', logIn)
router.post('/user/addReview/:userID', authentificationModdleware, addReview)

router.patch('/item/update/:itemID', authentificationModdleware, updateItemByID)

router.patch('/users/:userID', authentificationModdleware, updateUser)

router.patch('/users/:userID/post', updatePosts)

router.delete('/users/:userID', authentificationModdleware, deleteUser)

router.delete(
	'/itemPhoto/:itemPhotoID',
	authentificationModdleware,
	deteteItemPhoto
)
router.delete('/item/:itemID', authentificationModdleware, deleteItem)

module.exports = router
