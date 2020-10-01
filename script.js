// TODO add reference to HTML element with id of "p-name"
var nama = document.getElementById("p-name")
// TODO fill the inner HTML with your own name
//name.innerHTML = "kaka"
// TODO add reference to HTML element with id of "btn-change"
var btn_submit = document.getElementById("btn-change")

// TODO add reference to HTML element with id of "input-name"
var input_name = document.getElementById("input-name")
// TODO add function in btn-change event listener to get input-name value and put it to p-name

btn_submit.onclick = function()
{
    nama.innerHTML = input_name.value
    // TODO modify function to change input-name value to empty string
    input_name.value = ""
}

// EXTRA TODO add one more button in HTML that functions to reset p-name and input-name value
btn_reset = document.getElementById("btn-reset")
btn_reset.onclick = function()
{
    input_name.value = ""
    nama.innerHTML = ""
}
// EXTRA TODO add one more button in HTML that functions to add extra character (like "*") at the end of p-name
btn_add_char = document.getElementById("btn-add-char")
btn_add_char.onclick = function()
{
    nama.innerHTML = input_name.value + "*"
    input_name.value = ""
}
// SUPER EXTRA TODO add one more button that flips the p-name backwards!
btn_reverse = document.getElementById("btn-reverse")
btn_reverse.onclick = function()
{
    var new_name = input_name.value
    var split_str = new_name.split('')
    var reverse_str = split_str.reverse()
    var join_str = reverse_str.join('')
    
    nama.innerHTML = join_str
    input_name.value = ""
}