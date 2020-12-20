// sample a element in collection
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function generatetrashtalk(options) {
  // define things user might want
  const target = ["工程師", "設計師", "創業家"]
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  // define dummy data
  // const options = {
  //   length: '15',
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   symbols: 'on',
  //   excludeCharacters: '123'
  // }

  // create a collection to store things user paicked up
  let trashtalk = "身為一個"
  if (Object.keys(options).length !== 1) {
    return "There is no valid charactors in your selectnion !"
  } else {
    if (options.engineer === "on") {
      trashtalk += target[0]
      trashtalk += sample(task.engineer)
      trashtalk += sample(phrase)
    }
    if (options.designer === 'on') {
      trashtalk += target[1]
      trashtalk += sample(task.designer)
      trashtalk += sample(phrase)
    }

    if (options.entrepreneur === 'on') {
      trashtalk += target[2]
      trashtalk += sample(task.entrepreneur)
      trashtalk += sample(phrase)
    }
    return trashtalk + "吧 !"
  }


  // remove things user do not need
  //filter, includes

  // return error notice if collection is empty

  // start generating password


  // return password

  console.log("This function will generate password.")

}

// export generatePassword function for other files
module.exports = generatetrashtalk
