const chopAndProcess = (arr, func) => {
  arr.pop();
  func(arr);
}

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

chopAndProcess(arr, (arg) => {
  console.log(arg);
  chopAndProcess(arg, (arg2) => {
    console.log(arg2);
    chopAndProcess(arg2, (arg3) => {
      console.log(arg3);
      chopAndProcess(arg3, (arg4) => {
        console.log(arg4);
        console.log("FINISHED!");
      })
    })
  })
})
