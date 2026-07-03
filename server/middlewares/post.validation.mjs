export const validateCreatePostData = (req,res,next) =>{
   
    if(!req.body.title){
        return res.status(400).json({
            message : "กรุณาส่งข้อมูล Title เข้ามาด้วย"
        })
    }


    if(!req.body.content || req.body.content.trim().length < 500 || req.body.content.trim().length > 1000){
        return res.status(400).json({
            message : "กรุณาส่งข้อมูล Content และต้องมีความยาวระหว่าง 500 ถึง 1000 ตัวอักษร เข้ามาด้วย"
        })
    }
    
    const validCategories = ["Math", "English" , "Biology"]
    if(!req.body.category || !validCategories.includes(req.body.category)){
        return res.status(400).json({
            message : "กรุณาส่งข้อมูล Category ให้ถูกต้อง (ต้องเป็น 'Math', 'English' หรือ 'Biology' เท่านั้น)"
        })
    }

    if(!req.body.email){
        return res.status(400).json({
            message : "กรุณาส่งข้อมูล Email เข้ามาด้วย"
        })
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(req.body.email)) {
        return res.status(400).json({
            message: "รูปแบบ Email ไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง"
        });
    }
    next()
}