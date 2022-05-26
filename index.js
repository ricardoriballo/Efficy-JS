const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];

const Module = class {
  constructor() {}
  start() {
    const select = document.querySelector("select");
    const input = document.querySelector("input");
    const divInfo = document.querySelector("div");
    const form = document.querySelector("form");
    select.addEventListener("change", changeValue);

    oppoStatus.forEach((oppo) => {
      const { STATUS, SUCCESS } = oppo;
      const option = document.createElement("option");
      option.textContent = STATUS;
      option.value = SUCCESS;
      select.appendChild(option);
    });

    function changeValue(e) {
      input.value = e.target.value;
    }

    const onSubmit = (e) => {
      e.preventDefault();
      const status = select.selectedOptions[0].innerText[0];
      const statusJSON = JSON.parse(status);
      const success = input.value;
      const successJSON = JSON.parse(success);
      divInfo.innerHTML = `{"status":${statusJSON}, "success":${successJSON}}`;
    };

    form.addEventListener("submit", onSubmit);
  }
};

const main = new Module();
main.start();
