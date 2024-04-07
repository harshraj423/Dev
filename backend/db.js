const mongoose = require('mongoose');
try{
    mongoose.connect("mongodb+srv://ayushkant184:123@cluster0.2hywq2z.mongodb.net/")

}
catch(err){
    console.log(err)
    console.log('error');
}
const contentSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['video', 'summary', 'quiz'],
      required: true
    },
    content: {
      type: String,
      required: true
    }
  });

  const Content = mongoose.model('Content', contentSchema);


const courseSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  contents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content'
  }] 
});

const Course = mongoose.model('Course', courseSchema);


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = {Course, Content, User};
