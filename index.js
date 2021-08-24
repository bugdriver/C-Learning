const getDetails = function () {
  const dists = document.getElementsByClassName("dist");
  return [...dists].map(function (dist) {
    const name = dist.getElementsByTagName("select")[0].value;
    const address = dist.getElementsByTagName("textArea")[0].value;
    return { name: name, address: address };
  });
};

const main = function () {
  const details = getDetails();
  console.log(details);
};

window.onload = main;
