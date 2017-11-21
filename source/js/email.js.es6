autosize(document.querySelector('textarea'));
const form = document.querySelector('aside > form');
const submit = form.querySelector("input[type=submit]");
form.addEventListener('submit', event => {
  event.preventDefault();
  submit.setAttribute("disabled", true);
  let payload = {};
  for (let [key, node] of Object.entries(form.elements)) {
    if (isNaN(key)) {
      payload[key] = node.value;
    }
  }
  Email.send(payload.email,
            "im@imogen.fyi",
             `Hello from ${payload.name}`,
             payload.body,
             {
               token: "63cb3a19-2684-44fa-b76f-debf422d8b00",
               callback: () => {
                 state_control.closeContact();
                 alert("hey so this doesn't actually work right now... email me im@imogen.fyi");
               }
             });
  return false;
});
