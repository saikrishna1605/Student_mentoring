// const express=require('express');
// const mongoose =require('mongoose');
// const app=express();
// const ejs=require('ejs');
//  app.set('view engine', 'ejs');
//  mongoose.connect('mongodb://localhost:27017/');
//  const studentSchema=new mongoose.Schema(
//     {
//         roll_number: String,
//     student_name: String,
//     department: String,
//     section: String,
//     mentor_name: String,
//     mentor_phone_number: String,
//     email: String,
//     password: String,
//     academic_year: String,
//     current_year: String,
//     current_semester: Number,
//     cgpa: Number,
//     sgpa_per_year: {
//         first_year: {
//             semester_1: Number,
//             semester_2: Number
//         },
//         second_year: {
//             semester_3: Number,
//             semester_4: Number
//         },
//         third_year: {
//             semester_5: Number,
//             semester_6: String // '-' as string for pending semesters
//         },
//         fourth_year: {
//             semester_7: String,
//             semester_8: String
//         }
//     },
//     joining_year: Number,
//     regulation: String
//     });
//  const Student=mongoose.model('Student',studentSchema);
//  app.get('/addstudent',(req,res)=>{
//     Student.find({},function(err,names){
//         res.render('addstudent',{
//             names:names
//         });
//     })
//  })
//  app.listen(4000,function(){
//      console.log('Server started at port 4000');
//  })


//  // models/User.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// // Define the User schema
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// // Hash the password before saving the user
// userSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//     }
//     next();
// });

// // Method to compare password for validation
// userSchema.methods.comparePassword = async function (candidatePassword) {
//     return await bcrypt.compare(candidatePassword, this.password);
// };

// module.exports = mongoose.model('User', userSchema);






// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the User schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,  // Ensures email is stored in lowercase
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    }
});

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Method to compare password for validation
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
