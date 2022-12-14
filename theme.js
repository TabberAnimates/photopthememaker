const names = `leftSidebarColor,pageColor,contentColor,contentColor2,contentColor3,borderColor,fontColor,themeColor`
//Color data
const theme = `#300d20,#17060f80,#290b1b,#2e0c1e,#380f25,#42122c,#ffffff,#FF42A7`
//CSS animation data
const animation = `body { 
  background-color: #95234a; 
  animation-name: example; 
  animation-duration: 4s; 
  animation-iteration-count: 1.7976931348623157e+309; 
}
@keyframes example { 
  0%   {background-color: #95234a;} 
  25%  {background-color: #4b87bc;} 
  50%  {background-color: #1e183b;} 
  75% {background-color: #3f7ca9;} 
  100%   {background-color: #95234a;} 
}`

function add(tag, str) {
const para = document.createElement(tag); // Create element
para.innerHTML = str;
document.body.appendChild(para); // Append to body
}

function loadCode(str) {
  const output = str.split("˃"); // Splits the code into 2 sections
  let theme = output[0]; // Sets color data
  let animation = output[1]; // Sets CSS animation data
  // alert("A code has been loaded!");
}

// Get code data (if needed)
let prompt1 = prompt("Would you like to enter a theme code? (Y/N)");
if (prompt1.toLowerCase().includes("y")) {
  let prompt2 = prompt("Enter the code here:");
  loadCode(prompt2);
}

// Turns the data into css variables, which are used all around photop. Then it replaces the css variables in he <html> tag of the page to the automatically generated
// ones.
var e = document.getElementsByTagName('html')[0];
const hex = theme.split(",");
const nonhex = names.split(",");
let text = "";
for (const x in hex) {
  text += "--" + nonhex[x] + ":" + hex[x] + "; ";
}
e.style = text;

// Adds in animation data.
let p = add("style", animation);
// Better CSS
let betterstyle = add("style", `.pageHolder { background-color: var(--pageColor); border-radius: 12px; } .stickyContainer { position: sticky; top: 8px; z-index: 500; border-radius: 12px; box-shadow: 0px 0px 0px var(--pageColor), 0px 0px 0px var(--pageColor); } .sidebar { border-radius: 12px; position: sticky; display: flex; flex-direction: column; box-sizing: border-box; width: 200px; height: calc(100vh - 16px); top: 8px; background: var(--pageColor); color: var(--themeColor); font-size: 20px; line-height: 20px; font-family: var(--secondFont); font-weight: bold; } .groupMembers { position: fixed; display: flex; flex-direction: column; min-width: 198px; height: 100vh; overflow-y: auto; background: var(--pageColor); }`);
