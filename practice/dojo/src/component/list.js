function Persons(){
    let persons = [
        {
            id:1,
            name:"Tsegaye",
            age:23,
            dept:"IS"
        },
        {
            id:2,
            name:"kefle",
            age:24,
            dept:"IS"
        }
        ,{
            id:3,
            name:"Yeshineh",
            age:22,
            dept:"IS"
        }
    ]
    let names = ["Tsegaye","Yeshineh", "Kefle"]
    let personList = names.map((name, index)=><h4 key={index} >{index}, {name}</h4>)
    return (
        <h1>{personList}</h1>
        
        )
  
}
export default Persons