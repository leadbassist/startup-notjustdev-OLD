export default [
    {
        id: "1",
        question: "What is the output of the following code?",
        image: "https://drive.google.com/uc?id=1v3hm9n2CL2seGnaXw7u4FADxb1dmJ_dw",
        type: "singleChoice",
        choices: ["0", "19", "Error", "11", "191", "Error11", "110", "11119", "E1r1ror", "01111", "1191", "Err1111or"],
        correctAnswers: ["Error"],
    },
    {
        id: "2",
        question: "Is this a markdown content?",
        content: `
# h1 Heading 8-)
**This is some bold text!**
This is normal text. \`coding snippet: const a = 123;\`
\`\`\`
this is a block:
const a = 123;

console.log(a);
\`\`\`
`,
        type: "multipleChoice",
        choices: ["1", "21", "Another Error"],
        correctAnswers: ["Another Error", "1"]
    },
]