// const longFunc = () => {
//   for (let i = 0; i < 1000000000; i++) {}
// };

// const m = useMemo(() => {
//   return longFunc();
// }, [value]);

// const changeValue = (text) => {
//   setvalue(() => {
//     return text;
//   });
// };

// const toogle = () => {
//   setalert((prev) => !prev);
// };
// useEffect(() => {
//   console.log(currentPage.current);
//   currentPage.current++;
// });

// / import { useContextFunc } from "./ConextProvider";

// const { alert } = useContextFunc();
// return !alert ?

/* <button onClick={toogle}>Ckick Me</button>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          changeValue(e.target.value);
        }}
      /> */
// const { toogle, currentPage, value, changeValue } = useContextFunc();
// useEffect(() => {
//   console.log(`render Main`);
// }, [value]);

// const obj = {
//   contries: [
//     { belarus: { population: 3200, language: "bel" } },
//     { usa: { population: 100, language: "usa" } },
//     { russia: { population: 1150, language: "rus" } },
//     { moldova: { population: 145, language: "rus" } },
//     { kndr: { population: 1456, language: "rus" } },
//     { uar: { population: 1400, language: "rus" } },
//     { lol: { population: 110, language: "rus" } },
//   ],
//   time: 24,
//   national: "multi",
// };
// const newObj = {
//   ...obj,
//   contries: [...obj.contries],
// };
// const find = function (obj) {
//   let arr = [];
//   for (let i of obj) {
//     let [m] = Object.keys(i);
//     arr = [...arr, m]; //  resault -> arr = [belarus, usa, russia]
//   }
//   for (let i = 0; i < arr.length; i++) {
//     newObj.contries[i] = {
//       [arr[i]]: { ...obj[i][arr[i]] }, // how can i chanhge this belarus in cicle dinamicly? arr[i],  doesn't work, nothing works:)
//     };
//   }
// };
// find(obj.contries);
// console.log(newObj, obj);
// console.log(obj.contries[1].usa === newObj.contries[1].usa);
// // newObj.contries[0] = {
//   ...obj.contries[0],
//   belarus: { ...obj.contries[0].belarus },
// };

// (obj.contries[0] = {
//   ...obj.contries[0],
//   belarus: { ...obj.contries[0].belarus },
// }),

// const job = {};
// arr.forEach((res, i) => {
//   job[`${i}`] = res;
// });
// console.log(job);

// const { alert } = useContextFunc();
// useEffect(() => {
//   console.log(`render Alert`);
// });
// console.log(alert);
// if (!alert) return "";
