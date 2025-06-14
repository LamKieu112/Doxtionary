const container = document.getElementById("dictionary");
const defBox = document.getElementById("definitionBox");
const defTerm = document.getElementById("defTerm");
const defContent = document.getElementById("defContent");
const closeBtn = document.getElementById("closeBtn");

for (const letter in dictionaryData) {
  const section = document.createElement("section");
  section.innerHTML = `<h2>${letter}</h2><ul>` +
    dictionaryData[letter].map((entry, index) =>
      `<li><a href="#" onclick="showDef('${letter}', ${index}); return false;">${entry.term}</a> <em>(${entry.author})</em></li>`
    ).join("") +
    `</ul>`;
  container.appendChild(section);
}

function showDef(letter, index) {
  const entry = dictionaryData[letter][index];
  defTerm.textContent = entry.term;
  defContent.textContent = entry.definition || "Chưa có định nghĩa.";
  defBox.classList.remove("hidden");
}

closeBtn.onclick = () => {
  defBox.classList.add("hidden");
};
 
