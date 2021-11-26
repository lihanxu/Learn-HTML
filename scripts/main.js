// 1.修改标题内容
// let myHeading = document.querySelector("h1");
// myHeading.textContent = "hello world!"

// 2.点击切换图像
// let myImage= document.querySelector("img")
// myImage.onclick = function () {
//     let image = myImage.getAttribute("src")
//     if (image === 'images/arr.gif') {
//         myImage.src = "images/bg9.gif"
//     } else {
//         myImage.src = 'images/arr.gif'
//     }
// }

// 3.点击按钮，弹窗提示框要求输入信息
// let myHeading = document.querySelector('h1')
// let myButton = document.querySelector('button')
// myButton.onclick = function () {
//     setUserName()
// }

// function setUserName() {
//     let myName = prompt('请输入你的名字。')
//     if (!myName || myName === null) {
//         setUserName()
//     } else {
//         localStorage.setItem('name', myName)
//         myHeading.textContent = 'Mozilla 酷毙了，' + myName
//     }
// }

// if (!localStorage.getItem('name')) {
//     setUserName()
// } else {
//     let myName = localStorage.getItem('name')
//     myHeading.textContent = 'Mozilla 酷毙了，' + myName
// }
