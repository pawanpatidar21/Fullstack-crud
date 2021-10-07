
// const City = require('../models/city.model')

// exports.cityadd = (req, res) => {

//     const {  city } = req.body
//     const city_data = new City({
//     city
//     })

//     city_data.save((error, data) => {
//         if (error) {
//             return res.status(400).json({
//                 message: 'error'
//             })
//         }
//         if (data) {
//             return res.status(201).json({
//                 message: "student created successfully"
//             })
//         }
//     })



// }

// exports.city_paginationdata = async (req, res) => {
//     const page = +req.query.page || 1;
//     const size = +req.query.size || 2;
//     const offset = (page - 1) * size;
//     const city = await City.find().skip(offset).limit(size).lean().exec();
//     const totalDoc = await City.find().countDocuments().lean().exec();
//     const totalPage = Math.ceil(totalDoc / size);
//     res.status(200).json({ CityList: city, totalPage, page, size, totalDoc });
// }

// exports.cityDelete = async (req, res) => {
//     const city = await City.findByIdAndDelete({ _id: req.params.id })

//     if (city) {
//         return res.status(200).json({
//             city, done: true
//         })
//     } else {
//         return res.status(400).json({
//             done: false
//         })
//     }

// }
// exports.cityUpdate = async (req, res) => {
//     const { city } = req.body
//     const city = await City.findByIdAndUpdate(req.params.id, {
//         $set: {
//            city
//         }
//     })

//     if (city) {
//         return res.status(200).json({
//             city, done: true
//         })
//     } else {
//         return res.status(400).json({
//             done: false
//         })
//     }

// }