export const sayHello = (text) => {
  return text;
};

const main = document.querySelector("#main");
const footer = document.querySelector("#footer");

document.addEventListener("DOMContentLoaded", () => {
  main.style.display = "none";
  footer.style.display = "none";
});
console.log(main);
console.log(footer);

// export const hiddenMainAndFooter = (mainSection, footerSection) => {
//   if(mainSection && footerSection) {
//     mainSection
//   }
// }
