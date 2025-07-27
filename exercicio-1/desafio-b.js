const codeLearnStack = [ "JS", "CSS", "HTML", "Git", "GitHub" ];
const pens = [ "Red", "Orange", "Cian", "Pink", "Green" ];
const sectionsNotebook = [ 1, 2, 3, 4, 5 ];

function colorCodeGen( codeLearnStack, pens,sectionsNotebook)
{
    const colorCode = [ ...codeLearnStack, ...pens, sectionsNotebook ]
    console.log( colorCode );
}
colorCodeGen( codeLearnStack, pens, sectionsNotebook );
