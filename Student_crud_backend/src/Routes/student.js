const express = require('express');
// const { cityUpdate, cityDelete, city_paginationdata, cityadd } = require('../controllers/city.controller');
const { studentfetch, student_paginationdata, studentDelete, studentUpdate } = require('../controllers/student.controller');

const router = express.Router();

router.post('/student',studentfetch)
router.get("/student", student_paginationdata);
router.delete("/student/:id", studentDelete);
router.patch("/student/:id", studentUpdate);
// router.post('/city',cityadd)
// router.get("/city", city_paginationdata);
// router.delete("/city/:id", cityDelete);
// router.patch("/city/:id", cityUpdate);


module.exports = router