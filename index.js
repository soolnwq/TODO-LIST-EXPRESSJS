const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors())

let tasks = [];
let idCounter = 1;

// สร้างงานใหม่
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: 'กรุณาระบุชื่อสิ่งที่ต้องทำ' });

    const task = { id: idCounter++, title, completed: false };
    tasks.push(task);
    res.status(201).json(task);
});

// ดึงรายการงานทั้งหมด
app.get('/tasks', (req, res) => {
    const { filter } = req.query;

    let filteredTasks = tasks;
    if (filter === 'done') filteredTasks = tasks.filter(task => task.completed);
    else if (filter === 'undone') filteredTasks = tasks.filter(task => !task.completed);

    res.json(filteredTasks);
});

// แก้ไขงาน
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return res.status(404).json({ message: 'ไม่พบงานนี้' });

    task.title = title || task.title;
    res.json(task);
});

// ลบงาน
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index === -1) return res.status(404).json({ message: 'ไม่พบงานนี้' });

    tasks.splice(index, 1);
    res.status(204).send();
});

// ติ๊กว่างานเสร็จแล้ว
app.put('/tasks/:id/done', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return res.status(404).json({ message: 'ไม่พบงานนี้' });

    task.completed = true;
    res.json(task);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});  