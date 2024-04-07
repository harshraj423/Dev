const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const {Course, Content, User} = require('./db.js')
const app = express();

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://ayushkant184:123@cluster0.2hywq2z.mongodb.net/")

app.post('/register', async(req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username is already taken" });
        }
        const newUser = {
            username: username,
            email: email,
            password: password
        };
        await User.create(newUser);
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).send('Internal Server Error');
    }
});



app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password })
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('error');
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send('error');
    }
});

app.get('/allcourse', async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
    res.send('internal error')
  });
  
  app.post('/course/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
  
    try {
      const course = await Course.findById(courseId).populate('contents');
      
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
  
      res.json(course.contents); // Problematic part
    } catch (error) {
      console.error("Error fetching contents:", error);
      res.status(500).json({ message: "Internal Server Error" }); // Another response sent here
    }
});


  app.get('/course/:courseId99/:contentId', async (req, res) => {
    const courseId = req.params.courseId;
    const contentId = req.params.contentId;
  
    try {
        const course = await Course.findById(courseId).populate('contents');
      
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
  
      const content = course.contents.find(content => content._id.toString() === contentId);
  
      if (!content) {
        return res.status(404).json({ message: "Content not found" });
      }
  
      res.send({content})
      
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  app.use((req,res,next)=>{
    res.send('internal error')

  })

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
