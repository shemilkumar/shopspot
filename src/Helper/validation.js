const validate = (validateInputs) => {
  //   console.log(validateInputs.price);

  for (const key in validateInputs) {
    // console.log(key, validateInputs[key]);
    if (validateInputs[key] === "") {
      alert(`Please enter ${key}`);
      return false;
    }
  }

  if (validateInputs.email) {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        validateInputs.email
      )
    ) {
      alert("You have entered an invalid email address!");
      return {
        status: false,
        err: "Please input valid email!",
      };
    }
  }

  if (validateInputs.hasOwnProperty("price")) {
    if (validateInputs.price !== 0) {
      if (
        !/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/.test(
          validateInputs.price
        )
      ) {
        alert("You have entered an invalid price!");
        return {
          status: false,
          err: "Please input valid price!",
        };
      }
    } else {
      alert("You have entered an invalid price!");
      return {
        status: false,
        err: "Please input valid price!",
      };
    }
  }

  if (validateInputs.phoneNo) {
    if (
      !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
        validateInputs.phoneNo
      )
    ) {
      alert("You have entered an invalid Phone number!");
      return {
        status: false,
        err: "Please input valid phone number!",
      };
    }
  }

  return { status: true, ...validateInputs };
};

export default validate;
