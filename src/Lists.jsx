

function Lists(){
    
    //const fruits=["apple","orange","banana","coconut","pineapple"];
    const fruits=[{id: 1, name: "apple", calories: 95},
                  {id: 2, name: "orange", calories: 45},
                   {id: 3, name: "banana", calories: 105},
                  {id: 4, name: "coconut", calories: 159},
                  {id: 5, name: "pineapple", calories: 37}]
    //map method is used to convert an array into lists
    //fruits.sort((a,b) => a.name.localeCompare(b.name));
    fruits.sort((a,b) => a.calories-b.calories);
    const listitems=fruits.map(fruit => <li>{fruit.name}: &nbsp;
                                         <b>{fruit.calories}</b></li>);
    
    return(
       <ul>{listitems}</ul>
    );
}

export default Lists