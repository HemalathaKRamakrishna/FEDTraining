import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const userRequest = new Promise((resolve, reject) => {
  setTimeout(() => resolve("this is done"), 3000);
  setTimeout(() => reject("this is error"), 500);
});

userRequest
  .then(val => {
    console.log(val);
  })
  .catch(val => {
    console.log(val);
  })
  .finally(val => {
    console.log("calling finally regardless");
  });

console.log("this will be called before promise");
