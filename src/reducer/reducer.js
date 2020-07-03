import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_CHECK":
      return {
        data: action.payload
      };
    default:
      return {
        data: {}
      };
  }
}

export default reducer;
