import axios from "axios";
//<iframe src="
//docs.google.com/forms/d/e/1FAIpQLSfwvk-I1qEOvSo670-d8rU-_NOptYDpo8tD14Ugnm0Mp57x1g/viewform?embedded=true"
//width="640" height="689" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

const GOOGLE_FORM_ACTION_URL =
  "https://sheet.best/api/sheets/b14ae4b0-5fff-473a-bf87-8237ac4821c3";

export const sendEmail = async (data) => {
  const formData = new FormData();
  formData.append("Mobile", data.mobile);
  formData.append("Name", data.name);
  formData.append("Message", data.Message);
  const payload = {
    Name: data.name,
    Mobile: data.mobile,
    Message: data.message,
    Aknowledge:"NO"
  };

  const response = await fetch(GOOGLE_FORM_ACTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
  });
  // .then((r) => {
  //   r.json();
  // })
  // .then((data) => {
  //   // The response comes here
  //   console.log(data);
  //   return { success: true };
  // })
  // .catch((error) => {
  //   // Errors are reported there
  //   console.log(error);
  //   return { success: false };
  // });
  if (!response.ok) {
    console.log(response);
    console.log(JSON.stringify(response));
    return { success: false };
  } else {
    return { success: true };
  }
};
