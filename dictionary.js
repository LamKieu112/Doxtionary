const dictionary = {
  doxa: {
    title: "Doxa",
    definition: "Niềm tin phổ biến hoặc tư kiến trong triết học Hy Lạp cổ, đối lập với tri thức có cơ sở (episteme). Theo Plato, doxa gắn với thế giới khả giác, không đáng tin cậy."
  },
  episteme: {
    title: "Episteme",
    definition: "Tri thức chân chính, có cơ sở logic và lý luận. Là mục tiêu của triết gia theo Plato, đối lập với doxa."
  }
};

function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (dictionary[input]) {
    resultDiv.innerHTML = `<h3>${dictionary[input].title}</h3><p>${dictionary[input].definition}</p>`;
  } else {
    resultDiv.innerHTML = `<p>Không tìm thấy từ "${input}".</p>`;
  }
}