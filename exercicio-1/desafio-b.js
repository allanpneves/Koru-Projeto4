const codeLearnStack = ["JS", "CSS", "HTML", "Git", "GitHub"];
const pens = ["Red", "Orange", "Cian", "Pink", "Green"];
const notebookSections = ["1", "2", "3", "4", "5"];

function colorCodeGen(codeLearnStack, pens, notebookSections) {
  const colorCode = [...codeLearnStack, ...pens, ...notebookSections];
  console.log(colorCode);
}
colorCodeGen(codeLearnStack, pens, notebookSections);
