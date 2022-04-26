const yargs = require("yargs");

const { addAnime, listAnime } = require("./utils");

const app = (yargsObj) => {
  if (yargsObj.add) {
    addAnime({
      title: yargsObj.title,
      protag: yargsObj.protag,
      protagVA: yargsObj.protagVA,
      genre: yargsObj.genre,
    })
  }else if (yargsObj.list){
      listAnime()
  }else{
      console.log('Incorrect command')
  }
};

app(yargs.argv)