const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://malidevinavyasree:admin@cluster0.79m9pqf.mongodb.net/operations', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const itemSchema = new mongoose.Schema({
    name: String,
    quantity: Number
});
const Item = mongoose.model('Item', itemSchema);
app.post('/items', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.send(newItem);
});
app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

app.put('/items/:id', async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(item);
});

app.delete('/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.send({ message: 'Item deleted' });
});

app.listen(3001, () => {
    console.log('Server is running on port http://localhost:3001');
});
