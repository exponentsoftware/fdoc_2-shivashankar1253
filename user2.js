const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];
    let non_exist = {
        name:'shiva',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    var names = []
    // users.map((data,index)=>{
    //     let names = data.name
    //     if(names == data.name){
    //         console.log('yes')
    //         break;
    //     }
    //     else{
    //         console.log('no')
    //     }
    // })
    for (let i=0; i< users.length; i++){
         names = users[i].name
        if(names == users[i].name){
            users.push(non_exist)
            console.log(users)
            break
        }
        else{
            console.log("NO")
        }
    }