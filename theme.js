import theme from './preset.json' assert {type: 'json'};
preset = JSON.parse(theme);

var e = document.getElementsByTagName('html')[0];
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

let p = add("style", `body { background-color: #95234a; animation-name: example; animation-duration: 4s; animation-iteration-count: 1.7976931348623157e+309; } @keyframes example { 0%   {background-color: #95234a;} 25%  {background-color: #4b87bc;} 50%  {background-color: #1e183b;} 75% {background-color: #3f7ca9;} 100%   {background-color: #95234a;} } .pageHolder { background-color: var(--pageColor); border-radius: 12px; } .stickyContainer { position: sticky; top: 8px; z-index: 500; border-radius: 12px; box-shadow: 0px 0px 0px var(--pageColor), 0px 0px 0px var(--pageColor); } .sidebar { border-radius: 12px; position: sticky; display: flex; flex-direction: column; box-sizing: border-box; width: 200px; height: calc(100vh - 16px); top: 8px; background: var(--pageColor); color: var(--themeColor); font-size: 20px; line-height: 20px; font-family: var(--secondFont); font-weight: bold; }`);
