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
    let personList = persons.map(person=><h4 key={person.id}>{` Huy guys? My name is ${person.name}, I'm ${person.age} years old and My Dept is ${person.dept}`}</h4>)
    return (
        <h1>{personList}</h1>
        
        )
  
}
export default Persons