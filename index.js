let numberOfCharacters = 30;

let generatedPassword = "password";
let charset = "abcdefghijklmnopqrstuvwxyz";

let IncludeUppercase = false;
let IncludeNumbers = false;
let IncludeSymbols = false;

const TitleSetup = () => {
  const Title = document.createElement("div");
  document.body.append(Title);
  Title.innerText = "Password Generator";
  Title.className = "title";
};

const OutputSetup = () => {
  const Output = document.createElement("div");
  document.body.append(Output);
  Output.innerText = generatedPassword;
  Output.className = "output";
  Output.id = "output";
};

const InputSetup = () => {
  const InputDiv = document.createElement("div");
  const InputText = document.createElement("span");
  const Input = document.createElement("input");
  const SliderValue = document.createElement("input");

  document.body.append(InputDiv);
  InputDiv.append(InputText);
  InputDiv.append(Input);
  InputDiv.append(SliderValue);

  InputText.innerText = "Number of characters";
  Input.type = "range";
  Input.min = "10";
  Input.max = "50";
  Input.value = numberOfCharacters;

  Input.oninput = (e) => {
    numberOfCharacters = e.target.value;
    SliderValue.value = numberOfCharacters;
  };

  SliderValue.type = "number";
  SliderValue.value = numberOfCharacters;
  SliderValue.min = "10";
  SliderValue.max = "50";
  SliderValue.style.width = "40px";

  SliderValue.onchange = (e) => {
    numberOfCharacters = e.target.value;
    Input.value = numberOfCharacters;
  };
};

const UppercaseSetup = () => {
  const UppercaseDiv = document.createElement("div");
  const UppercaseText = document.createElement("span");
  const UppercaseCheckbox = document.createElement("input");

  document.body.append(UppercaseDiv);
  UppercaseDiv.append(UppercaseText);
  UppercaseDiv.append(UppercaseCheckbox);

  UppercaseText.innerText = "Include Uppercase";
  UppercaseCheckbox.type = "checkbox";
  UppercaseCheckbox.checked = IncludeUppercase;

  UppercaseCheckbox.onchange = () => {
    IncludeUppercase = !IncludeUppercase;
    if (IncludeUppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      const newStr = charset.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
      charset = newStr;
    }
  };
};

const NumbersSetup = () => {
  const NumbersDiv = document.createElement("div");
  const NumbersText = document.createElement("span");
  const NumbersCheckbox = document.createElement("input");

  document.body.append(NumbersDiv);
  NumbersDiv.append(NumbersText);
  NumbersDiv.append(NumbersCheckbox);

  NumbersText.innerText = "Include Numbers";
  NumbersCheckbox.type = "checkbox";
  NumbersCheckbox.checked = IncludeNumbers;

  NumbersCheckbox.onchange = () => {
    IncludeNumbers = !IncludeNumbers;
    if (IncludeNumbers) {
      charset += "0123456789";
    } else {
      const newStr = charset.replace("0123456789", "");
      charset = newStr;
    }
  };
};

const SymbolsSetup = () => {
  const SymbolsDiv = document.createElement("div");
  const SymbolsText = document.createElement("span");
  const SymbolsCheckbox = document.createElement("input");

  document.body.append(SymbolsDiv);
  SymbolsDiv.append(SymbolsText);
  SymbolsDiv.append(SymbolsCheckbox);

  SymbolsText.innerText = "Include Symbols";
  SymbolsCheckbox.type = "checkbox";
  SymbolsCheckbox.checked = IncludeSymbols;

  SymbolsCheckbox.onchange = () => {
    IncludeSymbols = !IncludeSymbols;
    if (IncludeSymbols) {
      charset += "!#$%&*+-=?@^_{}[]()/'`~,;:.<>";
    } else {
      const newStr = charset.replace("!#$%&*+-=?@^_{}[]()/'`~,;:.<>", "");
      charset = newStr;
    }
  };
};

const ButtonSetup = () => {
  let Button = document.createElement("button");
  document.body.append(Button);
  Button.innerText = "Generate Password";
  Button.addEventListener("click", () => handleClick());
};

TitleSetup();
OutputSetup();
InputSetup();
UppercaseSetup();
NumbersSetup();
SymbolsSetup();
ButtonSetup();

const handleClick = () => {
  generatedPassword = "";

  for (let i = 0, n = charset.length; i < numberOfCharacters; ++i) {
    generatedPassword += charset.charAt(Math.floor(Math.random() * n));
  }

  const Output = document.getElementById("output");
  Output.innerText = generatedPassword;
};
