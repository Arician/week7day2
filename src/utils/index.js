const fs = require("fs");

const addAnime = (animeObj) => {
  try {
    const stringobj = JSON.stringify(animeObj);
    fs.writeFileSync("./storage.json", stringobj);
  } catch (error) {
    console.log(error);
  }
};


const listAnime = () => {
  try {
      const jsonList=fs.readFileSync('./storage.json');
      const listparser=JSON.parse(jsonList)
      console.log(listparser)
  } catch (error) {
    console.log(error);
  }
};


module.exports ={
    addAnime,
    listAnime
}