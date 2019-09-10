// Create ple button styles
var pleButtonStyle = document.createElement("style");
pleButtonStyle.innerHTML = `    /* The Modal (background) */
    .pleButtonModal {
        display: none;
        /* Hidden by default */
        position: fixed;
        /* Stay in place */
        z-index: 1;
        /* Sit on top */
        padding-top: 100px;
        /* Location of the box */
        left: 0;
        top: 0;
        width: 100%;
        /* Full width */
        height: 100%;
        /* Full height */
        overflow: auto;
        /* Enable scroll if needed */
        background-color: rgb(0, 0, 0);
        /* Fallback color */
        background-color: rgba(0, 0, 0, 0.4);
        /* Black w/ opacity */
    }

    /* Modal Content */
    .pleButtonModalContent {
        background-color: #fefefe;
        margin: auto;
        height: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 45%;
        z-index: 99;
    }

    /* The Close Button */
    .pleButtonModalClose {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .pleButtonModalClose:hover,
    .pleButtonModalClose:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

  /* styling for the created button */
    #pleButton {
        border-radius: 4px;
    color: white;
    background-color: #38c172;
    padding: 0.7rem 2rem;
    font-size: 1.2rem;
    cursor:  pointer;

    }

    #pleButton:hover {
      background-color: #51d88a;
    }

    #pleButton:focus {
      outline: none;
    }
  #pleButtonIframe {
    width:100%;
    border:0;
      }

    @media only screen and (max-width: 600px) {
      .pleButtonModalContent {
        width: 85%;
      }
    }`;

// // Get the first script tag
var pleButtonref = document.querySelector("script");

// // Insert our new styles before the first script tag
pleButtonref.parentNode.insertBefore(pleButtonStyle, pleButtonref);

// creates the modal for the turtlecoin button pop up
var pleButtonModalCode = `<div id="pleButtonModal" class="pleButtonModal">
    <!-- Modal content -->
    <div class="pleButtonModalContent rounded">
        <span class="pleButtonModalClose">&times;</span>
        <div>
            <div class="" style="margin-top:1.5rem">
                <iframe src="" height="520px" id="pleButtonIframe"></iframe>
            </div>
        </div>
    </div>
  </div>`;

var pleDiv = document.createElement("div");

pleDiv.innerHTML = pleButtonModalCode;
document.body.appendChild(pleDiv);

var pleButtonModal = document.getElementById("pleButtonModal");

// creates the button for the turtleCoin pay widget
var pleButton = document.createElement("input");
pleButton.type = "button";
pleButton.value = "Pay with ple";
pleButton.id = "pleButton";
pleButton.onclick = function() {
  pleButtonModal.style.display = "block";
};

// Get the <span> element that closes the modal
var pleButtonModalClose = document.getElementsByClassName(
  "pleButtonModalClose"
)[0];

// When the user clicks on <span> (x), close the modal
pleButtonModalClose.onclick = function() {
  pleButtonModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == pleButtonModal) {
    pleButtonModal.style.display = "none";
  }
};

document.querySelector(".ple-btn").appendChild(pleButton);

// populate the iframe url with your hashed data from TurtlePay
pleButtonIframe = document.querySelector("#pleButtonIframe");
pleButtonDiv = document.querySelector(".ple-btn");

// pleButtonData = pleButtonIframe.getAttribute("data-turtle");
const pleButtonPayload = pleButtonDiv.getAttribute("data-plebutton");

pleButtonIframe.src = `https://plebutton.com/pay?buttonPayload=${pleButtonPayload}`;
