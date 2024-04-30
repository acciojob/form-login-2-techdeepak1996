document.getElementById('myForm').onsubmit = function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      let formInfo = '';
      for (const pair of formData.entries()) {
        formInfo += `${pair[0]}: ${pair[1]} `;
      }
      alert(formInfo.trim());
    };
