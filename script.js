function toDoItemElement(text,num){
  return`<tr>
    <td>${text}</td>
    <td>${num}</td>
    <td><span class="remove">&#128465</span></td>
  </tr>`
}

function addItem(){
  const expense_inp=$("#expenseinp");
  const amount_inp=$("#amountinp");
  const expense_tbl=$("#expensetbl");
  if(expense_inp.val().trim()===""  || amount_inp.val().trim()==="") return;

  const to_do_item=$(toDoItemElement(expense_inp.val(), amount_inp.val()))
  to_do_item.find(".remove").click(function () {
    to_do_item.remove()
  })
  expense_tbl.append(to_do_item)
  expense_inp.val("")
  amount_inp.val("")
}

$(document).ready(function(){
  const add_btn=$("#addbtn")
  add_btn.click(addItem)
})