function storeData() {
  const data = document.getElementById("dataToStore").value;
  Cookies.set("storedData", data);
  alert("Data stored in COOKIE successfully.");
}

function searchData() {
  const searchValue = document.getElementById("searchData").value;
  const storedData = Cookies.get("storedData");
  if (storedData && storedData.includes(searchValue)) {
    alert("Data found in COOKIE: " + storedData);
  } else {
    alert("Data not found in COOKIE.");
  }
}

function clearCookie() {
  Cookies.remove("storedData");
  alert("COOKIE data cleared.");
}

function logout() {
  sessionStorage.removeItem("userEmail");
  window.location.href = "login.html";
}
