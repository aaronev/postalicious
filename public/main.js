function getAll() {
  let allInfo = document.querySelectorAll(
    "#method, \
     #host,   \
     #body,   \
     .qPKey,  \
     .qPVal,  \
     .hKey,   \
     .hVal"
     )
  return allInfo
}

function buildRequest() {
  let reqBox = document.getElementById('requestBox')
  let specific = {
    Method: getAll()[0].value,
    Host: getAll()[1].value,
    Queries: [
      getAll()[2].value + ": " + getAll()[3].value,
      getAll()[4].value + ": " + getAll()[5].value,
      getAll()[6].value + ": " + getAll()[7].value,
      ],
    Headers: [
      getAll()[8].value + ": " + getAll()[9].value,
      getAll()[10].value + ": " + getAll()[11].value,
      getAll()[12].value + ": " + getAll()[13].value,
      ],
    Body: getAll()[14].value,
  }
  reqBox.value = JSON.stringify(specific)
}