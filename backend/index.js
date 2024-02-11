import express, { request } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';




const app=express();
//middleware for parsing request body
// option1: Allow al origins with Default of cors(*)
app.use(cors());

//Option2: Allow custom origins 
// app.use(cors({
//    origin:'https://localhost:3000',
//    methods:['GET','PUT','POST','DELETE'],
//    allowedHeades:['content-type']
// }));


app.use(express.json());

app.get('/',(request,response)=>{
 
    console.log(request);
    return response.status(234).send('welcome to MERN Stack tutorial');

});
app.use('/books',booksRoute);

// // route  to save a new book 
// app.post('/books', async (request,response)=>{
//       try{
//          if(
//          !request.body.title ||
//          !request.body.author ||
//          !request.body.publishYear



//          ) {
//             return response.status(400).send({
//             message:'send all required fields :title,author,publishYear'
//             });
//          }
//          const newBook={
//            title: request.body.title ,
//             authoe:request.body.author,
//             publishYear:request.body.publishYear

//          };
//          const book= await Book.create(newBook);

//          return response.status(201).send(book);

//       }
//       catch(error){
 
//       console.log(error.message);
//       response.status(500).send({message:error.message});
//       }
      
// });

  
//  // Route to Get all books 
//  app.get('/books',async (request,response)=>{
//      try {
//         const books= await Book.find({});
//         return response.status(200).json( {
//             count:books.length,
//             data:books});
       
//      } catch (error) {
//         console.log(error.message);
//         response.status(500).send({message:error.message});
//      }

//  });


//   // Route  to get one book from database by id  
//   app.get('/books/:id',async (request,response)=>{

//       const { id }=request.params;
//     try {
//        const books= await Book.findById({id});
//        return response.status(200).json(book);
        
      
//     } catch (error) {
//        console.log(error.message);
//        response.status(500).send({message:error.message});
//     }

// });


// // route to update a book in database 

// app.put('/books/:id',async (request,response)=>{
//    try {
     
//     if(
//         !request.body.title ||
//         !request.body.author ||
//         !request.body.publishYear
//         ) {
//            return response.status(400).send({
//            message:'send all required fields :title,author,publishYear'
//            });
//         }
//       const { id }=request.params;

//       const result= await Book.findByIdAndUpdate(id,request.body);
//       if(!result){
//         return response.status(404).json({message:'Book not found '});
//       }
//       return response.status(200).send({message:'Book updated successfully'});
//     }
//             catch (error) {
//      console.log(error.message);
//      return response.status(500).send({message:error.message});
//    }
  
// });
   

// // Route for delete a book 

//   app.delete('/books/:id', async(request,response)=>{
//   try {
//    const { id }=request.params;
   
//     const result= await Book.findByIdAndDelete(id);

//     if(!result){
//       response.status(404).json({message:"book not found"});
//     }
   
//     return response.status(200).json({message:"book deleted successfully"});

     
//   } catch (error) {
//    console.log(errror.message);
//    return response.status(500).send({message:error.message});
//   }
    


//   });
mongoose.connect(mongoDBURL).then(()=>{
  
    console.log('app connected database ');
   
app.listen(PORT,()=>{
    console.log(`app is listening to port:${PORT}`);
 
 });
}).catch((error)=>{
 console.log(error);

});
