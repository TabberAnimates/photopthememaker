//Color Data
const theme = `{
  "leftSidebarColor": "#300d20",
  "pageColor": "#17060f80", 
  "contentColor": "#290b1b", 
  "contentColor2": "#2e0c1e", 
  "contentColor3": "#380f25", 
  "borderColor": "#42122c", 
  "fontColor": "#ffffff", 
  "themeColor": "#FF42A7"
}`
//CSS Animation Data
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
let prompt1 = prompt("Would you like to enter a theme code? (Y/N)");
if (prompt1.toLowerCase().includes("y")) {
  let prompt2 = prompt("Enter the code here:");
  const output = prompt2.split("˃");
  let theme = output[0];
  let animation = output[1];
}

var e = document.getElementsByTagName('html')[0];
const preset = JSON.parse(theme);
let text = "";
for (const x in preset) {
  text += "--" + x + ":" + preset[x] + "; ";
}
e.style = text;

function add(tag, str) {
// Create element:
const para = document.createElement(tag);
para.innerHTML = str;

// Append to body:
document.body.appendChild(para);
}

let betterStyle = add("style", `.pageHolder { background-color: var(--pageColor); border-radius: 12px; } .stickyContainer { position: sticky; top: 8px; z-index: 500; border-radius: 12px; box-shadow: 0px 0px 0px var(--pageColor), 0px 0px 0px var(--pageColor); } .sidebar { border-radius: 12px; position: sticky; display: flex; flex-direction: column; box-sizing: border-box; width: 200px; height: calc(100vh - 16px); top: 8px; background: var(--pageColor); color: var(--themeColor); font-size: 20px; line-height: 20px; font-family: var(--secondFont); font-weight: bold; }`);
let p = add("style", animation);
