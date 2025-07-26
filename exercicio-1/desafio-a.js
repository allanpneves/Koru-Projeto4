const person = {
    name: "Allan",
    age: 30
};

function isAdult ( ...person )
{
    const legalAgeCalc = person[ 0 ].age >= 18 ? true : false;
    const user = {
        name: person[ 0 ].name,
        age: person[ 0 ].age,
        legalAge: legalAgeCalc
    };
    return user;
}
console.log( isAdult( person ) );
