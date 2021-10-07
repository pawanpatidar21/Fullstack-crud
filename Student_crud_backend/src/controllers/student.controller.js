
const Student = require('../models/student.model')

exports.studentfetch = (req, res) => {


    

     const { name, age, gender, city } = req.body
        const student_data = new Student({
            name, age, gender, city 
        })

    student_data.save((error, data) => {
            if (error) {
                return res.status(400).json({
                    message: 'error'
                })
            }
            if (data) {
                return res.status(201).json({
                    message: "student created successfully"
                })
            }
        })


    
}

exports.student_paginationdata = async (req, res) => {

    let search = req.query.search || ".*"; // find in every form or like a evaluate
    search = search + ".*";

    let serachCriteria = {};
    serachCriteria = {
        $or: [{ name: { $regex: search, $options: "i" } }
        ],
    };

    if (req.query.range) {
        serachCriteria.age = {
            $gte: req.query.start,
            $lte: req.query.end
        }
    }




    if (req.query.city) serachCriteria.city = req.query.city;
    if (req.query.gender) serachCriteria.gender = req.query.gender;
    if (req.query.age) serachCriteria.age = req.query.age;



    const page = +req.query.page || 1;
    const size = +req.query.size || 20;
    const offset = (page - 1) * size;
    const user = await Student.find(serachCriteria).sort({ age: -1 }
).skip(offset).limit(size).lean().exec();
    const totalDoc = await Student.find(serachCriteria).countDocuments().lean().exec();
    const totalPage = Math.ceil(totalDoc / size);
    res.status(200).json({  StudentList: user, totalPage, page, size, totalDoc });
}

exports.studentDelete = async (req, res) => {
    const student = await Student.findByIdAndDelete({ _id:req.params.id })

    if (student) {
       return res.status(200).json({
            student,done:true
        })
    } else {
        return res.status(400).json({
            done: false
        })
    }
  
}
exports.studentUpdate = async (req, res) => {
    const { name, age, gender, city } = req.body
    const student = await Student.findByIdAndUpdate( req.params.id , {
        $set: {
            name,
            age,
            gender,
            city
        }
    })

    if (student) {
       return res.status(200).json({
            student,done:true
        })
    } else {
        return res.status(400).json({
            done: false
        })
    }
  
}