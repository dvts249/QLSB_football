const express = require('express');
const path = require('path');


const router = express.Router();

const adminControler = require('../controllers/admin');


router.route('/')
   .get(adminControler.getLogin) //get request
   .post(adminControler.postLogin) // post request

router.get('/logout',adminControler.logout) //get request   

router.post('/chnagestatus',adminControler.postChnageStatus)// post change status

router.route('/addfootball')
      .get(adminControler.getAddFootball) // get request for football add page
      .post(adminControler.postAddFootball) // post request for football add to db

router.route('/search')
      .get(adminControler.getSearch)   // get request   
      .post(adminControler.postSearch) // post request

router.route('/update')
      .post(adminControler.getUpdate) //get update page for post request
      
router.route('/updateData')
      .post(adminControler.updatePrevData) // update prev data      


module.exports = router;