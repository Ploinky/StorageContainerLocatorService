import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("je suis la")
  }

  containerChanged(event) {
    const hiddenInput = document.getElementById("hidden-input");
    if(!hiddenInput) {
      return;
    }

    const option = document.getElementById("option-" + event.target.value);

    if(!option) {
      hiddenInput.value = "";
      return;
    }
    
    hiddenInput.value = option.getAttribute('data-value');
  }
}
