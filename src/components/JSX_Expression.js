import React from "react";

export default function JSX_Expression() {
    // biến
    const name = "Devmaster";
    // biến đối tượng
    const person = {
        name: "Devmaster",
        age: 30
    };
    const fnInfor = (user) => {
        return (
            <div>
                <p>Name: {user.name} - Age: {user.age}</p>
            </div>
        )
    }

    const element = (
        <div className='alert alert-success alert-dismissible'>
            <h2 style={{color: "chocolate"}}>Xin chào {person.name}</h2>
            <p>Tuổi: {person.age}</p>
        </div>
    )

    const fnSayHello = (user) => {
        if (user >= 30) {
            return <p>Hello {user.name} bạn hơi non</p>
        }else {
            return <p>Hello</p>
        }
    }

    return (
        <div>
            <h1>JSX_Expression</h1>
            <p style={{color: "blueviolet"}}>Well come to {name}</p>
            <p>Name: {person.name} - Age: {person.age}</p>
            {fnInfor(person)}
            {fnSayHello(person.age, person.name)}
            {element}
        </div>
    )
}