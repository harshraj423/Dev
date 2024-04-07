const mongoose = require('mongoose');
const { Course, Content, User } = require('./db.js');

mongoose.connect("mongodb+srv://ayushkant184:123@cluster0.2hywq2z.mongodb.net/")
  .then(() => {
    console.log('Connected to MongoDB');
    seedMoreData();
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

  // Function to seed the database with additional dummy data
  const moreCourseData = [
    // Additional course data
    {
      name: 'Web Development Fundamentals',
      instructor: 'Alice Johnson',
      duration: 120,
      contents: [] // Leave empty for now
    },
    {
      name: 'Data Structures and Algorithms',
      instructor: 'Bob Smith',
      duration: 180,
      contents: [] // Leave empty for now
    }
  ];
  
  const moreUserData = [
    // Additional user data
    {
      username: 'user3',
      email: 'user3@example.com',
      password: 'user3password',
      courses: [] // Leave empty for now
    },
    {
      username: 'user4',
      email: 'user4@example.com',
      password: 'user4password',
      courses: [] // Leave empty for now
    }
  ];
  
  // Function to seed the database with additional dummy data
  async function seedMoreData() {
    try {
      // Create more content documents
      const moreContents = await Content.insertMany(moreContentData);
  
      // Associate additional content with courses
  
  
      // Create more user documents and associate additional courses
      const user3 = await User.findOne({ username: 'user3' });
      if (user3) {
        const user3Courses = [/* Add course IDs for user3 */];
        await User.findByIdAndUpdate(user3._id, { $set: { courses: user3Courses } });
      } else {
        console.error('User "user3" not found');
      }
  
      const user4 = await User.findOne({ username: 'user4' });
      if (user4) {
        const user4Courses = [/* Add course IDs for user4 */];
        await User.findByIdAndUpdate(user4._id, { $set: { courses: user4Courses } });
      } else {
        console.error('User "user4" not found');
      }
  
      console.log('Additional dummy data seeded successfully');
    } catch (error) {
      console.error('Error seeding additional dummy data:', error);
    } finally {
      // Close the database connection
      mongoose.connection.close();
    }
  }