// const asyncHandler = (fn) => async(req,res,next) =>{
//  try {
//   await fn (req,res,next)
// } catch (error) {
//     res.status(error.code || 500).json({
//         status : false,
//         message : ("error occured",error.message)
//     })
// }
// }
// export {asyncHandler}


const asyncHandler = (requestHandler)=>{
 return(req,res,next)=>{
     Promise.resolve(req,res,next).catch((err)=>next(err))
 }
}

export {asyncHandler}