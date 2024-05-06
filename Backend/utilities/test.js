function getUrl() {
  return fetch("https://dummyjson.com/products/1")
}

getUrl()
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data)
})