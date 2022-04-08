
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": ["swimming"]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": ["soccer"]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": ["soccer"]
       },
   ]
   
   const addPlayer = function(req,res){
       const newPlayer = req.body
       players.map((key)=>{
           if (key.name === newPlayer.name){
             return res.send("The player name already exists!!")
        }
       })
       players.push(newPlayer)
       res.send({players:players })
   }
module.exports.allPlayers = addPlayer


// const addPlayer2 = function(req,res){
// const newPlayer2 = req.body
// for(let i =0; i<players.length; i++){
//     const thePlayer = players[i]
//     if ( thePlayer.name  === newPlayer2.name){
//          return res.send("The player name already exists!!")
//         }
//     }
//         players.push(newPlayer2)
//         res.send({players:players })
//     }
 
// module.exports.allPlayers2 = addPlayer2



   
  





































   // let addToArray= function (req, res) {
//     let x= req.body.number
//     console.log(x)
//     let arr= [2, 5, 11, 14]
//     arr.push(x)
//     res.send( {  msg: "post req 3", data: arr  } )
// }

// module.exports.addToArray= addToArray