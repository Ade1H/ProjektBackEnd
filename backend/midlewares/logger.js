const cons =(req,res,next)=>{
  console.log("autentication")
  next()
}

module.exports= cons
