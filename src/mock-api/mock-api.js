import { Server } from "miragejs";

new Server({
  routes() {
    this.namespace = "api";

    this.get("/empolyees/",() =>{
        return [
            "John Hartman",
            "Samad Pitt",
            "Amaya Knight",
            "Leanna Hogg",
            "Aila Hodgson",
            "Vincent Todd",
            "Faye Oneill",
            "Lynn Haigh",
            "Nylah Riddle"
          ];
    });
  }
});

// const functionGetEmployee =()=>{
//     return Promise.resolve({
//       json: () =>
//         Promise.resolve([
//           "CEO",
//           {
//             "direct-subordinates": [
//                 "Samad Pitt",
//                 "Leanna Hogg"
//             ]
//           },

//         ])
   
//     })
//   }

//   export default functionGetEmployee