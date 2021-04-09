import { getData } from "./Helper";
import { hidePreloader } from "./Helper";

export const getDataFromApi = function (setData, setPreloader) {
  fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        {
          countries {
           name
           code
           emoji
           continent {
             name
           }
         }
           }
           `,
    }),
  })
     .then((res) => res.json())
     .then((res) => {
      getData(res.data, setData);
      hidePreloader(setPreloader);
    });
};
