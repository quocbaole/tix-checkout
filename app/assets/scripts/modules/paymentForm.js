const jsPmtInputs = document.querySelectorAll('.js-pmt-input')

jsPmtInputs.forEach((el) => {
  el.addEventListener('blur', () => {
    if (el.value) {
      el.classList.add('has-value')
    } else {
      el.classList.remove('has-value')
    }
  })
})