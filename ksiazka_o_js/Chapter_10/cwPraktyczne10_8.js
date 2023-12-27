const tabelOfNames = ["Sebastian", "Cezary", "Miłosz", "Adam", "Joanna", "Marta", "Małgorzata", "Paula", "Piotr", "Kinga", "Pamela", "Jacek"];
function build() {
    let html = "<h1>tabela moich przyjaciół.</h1><table>";
    tabelOfNames.forEach((item, index) => {
        html += `<tr class="box" data-row="${index + 1}" data-name="${item}" onClick="getData(this)"><td>${item}</td>`;
        html += `<td>${index + 1}</td></tr >`;
    });
}
