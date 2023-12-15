function grossPay() {
  var employee_name = document.getElementById("employee_name").value;
  var hourly_rate = document.getElementById("hourly_rate").value;
  var hours_worked = document.getElementById("hours_worked").value;
  var overtime = document.getElementById("overtime").value;
  var overtime_rate = document.getElementById("overtime_rate").value;

  var gross_pay = hourly_rate * hours_worked + overtime_rate * overtime;
  var gross = gross_pay.toFixed(2);

  document.getElementById("result").innerHTML = gross;
}

/*Net Pay set up*/
function netPay() {
  var hourly_rate = document.getElementById("hourly_rate").value;
  var hours_worked = document.getElementById("hours_worked").value;
  var overtime = document.getElementById("overtime").value;
  var overtime_rate = document.getElementById("overtime_rate").value;

  var tax_rate = document.getElementById("tax_rate").value;
  var medical_insurance = document.getElementById("medical_insurance").value;
  var savings = document.getElementById("savings").value;
  var membership = document.getElementById("membership").value;

  var gross_pay = hourly_rate * hours_worked + overtime_rate * overtime;
  var tax = gross_pay * (tax_rate / 100);

  var deductions = tax + medical_insurance + savings + membership;

  var net_pay = gross_pay - deductions;
  var net = net_pay.toFixed(2);
  document.getElementById("result").innerHTML = net;
}
