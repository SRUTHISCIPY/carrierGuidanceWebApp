const express=require('express');
const mongoose=require('mongoose');

const app= express();
const port=2000;
const bodyParser = require('body-parser')
const CollegeRouter=require('./router/collegerouter')
const FeedbackRouter=require('./router/feebackrouter')
const JobRouter=require('./router/jobrouter');
const User = require('./router/user');
app.use(bodyParser.json())

app.use('/college',CollegeRouter)
app.use('/feedback',FeedbackRouter)
app.use('/job',JobRouter)
app.use('/',User)
app.listen(port,()=>{
    console.log(`app listening to port ${port}`)
})



mongoose.connect(`mongodb+srv://sruthiscipy:sCIPYTECH71@cluster0.7tlwqki.mongodb.net/?retryWrites=true&w=majority`,{
})
.then(()=>console.log("mongoose connected"))
.catch((err)=>console.log("err"))