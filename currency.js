document.addEventListener('DOMContentLoaded', () => {
  //when the fprm is submitted
  document.querySelector('#form').onsubmit = () => {
    //get the value of input field for the currency and save it in the var
    const currency = document.querySelector('#currency').value;
    //request an URL and get back the result (ajax request)
    fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${currency}`)
      //take a response and convert it to json
      .then(response => response.json())
      //go inside the "rates" and than to "currency" to get the number(json)
      .then(data => {
        const contents = `1 USD is equal to ${data.rates[currency]} ${currency}.`
        document.querySelector('#result').innerHTML = contents;
      })
      //.catch - if there is an error somewhere
      .catch(() => {
        document.querySelector('#result').innerHTML = 'There was an error.';
      });
    return false;
  }
})
