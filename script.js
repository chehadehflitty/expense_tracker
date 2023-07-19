function toDoItemElement(text,num){
  return`<tr>
    <td>${text}</td>
    <td class="nbr">${num}</td>
    <td><span class="remove">&#128465</span></td>
  </tr>`
}

function addAmount(){
  let first=parseInt($("#amount").text())
  let second=parseInt($("#amountinp").val());
  $("#amount").text(first+second);
}



function addItem(){
  const expense_inp=$("#expenseinp");
  let amount_inp=$("#amountinp"); 
  const expense_tbl=$("#expensetbl");
  let intamount=0
  if(expense_inp.val().trim()===""  || amount_inp.val().trim()==="") return;

  const to_do_item=$(toDoItemElement(expense_inp.val(), amount_inp.val()))
  to_do_item.find(".remove").click(function(){
    let second=parseInt(to_do_item.find(".nbr").text())
    let first=parseInt($("#amount").text())
    $("#amount").text(first - second);
  })
  to_do_item.find(".remove").click(function () {
    to_do_item.remove()
  })
  
  expense_tbl.append(to_do_item)
  addAmount()
  expense_inp.val("")
  amount_inp.val("")

}

$(document).ready(function(){
  const add_btn=$("#addbtn")
  add_btn.click(addItem)
  
})