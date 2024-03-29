const qrcode = document.querySelector(".qrcode");
const qrcodeUrl = document.getElementById("qrcodeUrl");
const [lightColor, darkColor, selectSize, btnDownload] =
  document.querySelectorAll(".options > *");

const sizes = [128, 256, 512];

sizes.forEach((size) => {
  const sizeOption = document.createElement("option");
  const content = document.createTextNode(`${size} px`);
  sizeOption.setAttribute("value", size);
  sizeOption.appendChild(content);
  selectSize.appendChild(sizeOption);
});

qrcodeUrl.addEventListener("input", () => {
  qrcode.innerText = "";
  const qrcodeOptions = {
    text: qrcodeUrl.value,
    width: selectSize.value,
    height: selectSize.value,
    colorDark: darkColor.value,
    colorLight: lightColor.value,
    correctLevel: QRCode.CorrectLevel.M,
  };

  new QRCode(qrcode, qrcodeOptions);
  setTimeout(() => {
    btnDownload.href = qrcode.querySelector("img").src;
  }, 50);

  if (!qrcodeUrl.value.trim()) {
    btnDownload.classList.add("disabled");
  } else {
    btnDownload.classList.remove("disabled");
  }
});
