
# TodoList API (Mock)

ระบบ TodoList แบบง่าย ใช้ **Node.js + Express**  
เก็บข้อมูลในหน่วยความจำ (Memory) — ไม่มีการเชื่อมต่อฐานข้อมูล  

---

## วิธีติดตั้งและใช้งาน

```bash
# 1. Clone โปรเจกต์
git clone https://github.com/your-username/todolist-api.git
cd todolist-api

# 2. ติดตั้ง dependencies
npm install

# 3. รันเซิร์ฟเวอร์
npm start
```

>  เริ่มใช้งานได้ที่: [http://localhost:3000](http://localhost:3000)

---

## 📌 API Endpoint

| Method | Endpoint             | Description                                      |
|--------|----------------------|--------------------------------------------------|
| POST   | `/tasks`             | เพิ่มรายการใหม่                                 |
| GET    | `/tasks`             | ดูงานทั้งหมด หรือกรอง `?filter=done/undone`    |
| PUT    | `/tasks/:id`         | แก้ไขชื่องาน                                    |
| PUT    | `/tasks/:id/done`    | ติ๊กว่างานเสร็จแล้ว                             |
| DELETE | `/tasks/:id`         | ลบงาน                                           |

---

##  ตัวอย่าง JSON ที่ใช้

### สร้างงานใหม่ (`POST /tasks`)
```json
{
  "title": "ไปซื้อของ"
}
```

###  แก้ไขงาน (`PUT /tasks/1`)
```json
{
  "title": "ไปตลาด"
}
```

---


