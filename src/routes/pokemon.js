const {Router} =require("express")
const router = Router()
const data = require("../sample.json")
const BaseResponse =  require("../interfaces/baseResponse")

router.get("/",(req,res)=>{
    var response =  new BaseResponse({message:`${data.length} pokemon found`,args:{list:data}})
    res.json(response)
})

router.get("/:id",(req,res)=>{
    var index = req.params.id
    var pokemon = data[index]
    var response
    if(pokemon!=null){
        response =  new BaseResponse({message:`Pokemon found`,args:{data:pokemon}})
    }else{
        response =  new BaseResponse({message:`Pokemon not found`,code:"400",status:"Failed"})
    }
    
    res.json(response)
})

router.post("/",(req,res)=>{
    var {name} = req.body

    var response
    if(name){
        var newPokemon = {name,id:data.length}
        data.push(newPokemon)
        response =  new BaseResponse({message:`Pokemon added`,args:{data:newPokemon}})
    }else{
        response =  new BaseResponse({message:`Name is not valid`,code:"400",status:"Failed"})
    }
    res.json(response)
})
module.exports = router