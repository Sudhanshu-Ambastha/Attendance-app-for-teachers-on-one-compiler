function submitAttendance() {
  var formData = {
    action: "in",
    id: document.getElementById("id").value,
    route: document.getElementById("route").value,
    morningStudentsPresent: document.getElementById("morningStudentsPresent").value,
    morningStudentsAbsent: document.getElementById("morningStudentsAbsent").value,
    eveningStudentsPresent: document.getElementById("eveningStudentsPresent").value,
    eveningStudentsAbsent: document.getElementById("eveningStudentsAbsent").value,
    remarks: document.getElementById("remarks").value,
    teacherEmail: document.getElementById("teacherEmail").value
  };

  var url = "your google appscript path";

  fetch(url, {
    method: "POST",
    body: new URLSearchParams(formData),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById("response").textContent = data;
  });
}
