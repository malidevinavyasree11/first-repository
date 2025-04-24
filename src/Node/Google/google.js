const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://malidevinavyasree:admin@cluster0.79m9pqf.mongodb.net/google', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB Atlas'));
const userSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
});
const User = mongoose.model('User', userSchema);
app.get('/user', async (req, res) => {
  try {
    const data = req.query.data || ''; 
    const users = await User.find({
      $or: [
        { title: { $regex: data, $options: 'i' } },
        { description: { $regex: data, $options: 'i' } },
        { link: { $regex: data, $options: 'i' } },
      ],
    });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: error.message });
  }
});
app.post('/user', async (req, res) => {
  console.log('Request Body:', req.body);
  const user = new User({
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ message: error.message });
  }
});
app.put('/user/:id', async (req, res) => {
  console.log('Request Body:', req.body);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(400).json({ message: error.message });
  }
});
app.delete('/user/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
