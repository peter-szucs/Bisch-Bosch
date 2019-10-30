function BishBosh() {
    var number = document.getElementById("number").value;
    document.getElementById("numberShow").innerHTML = number;
    var bish = document.getElementById("bish").value;
    document.getElementById("bishShow").innerHTML = bish;
    var bosh = document.getElementById("bosh").value;
    document.getElementById("boshShow").innerHTML = bosh;

    var outelement = document.getElementById("out");
    outelement.innerHTML = "";
    for (let i = 0; i < number; i++) {
        var spanelement = document.createElement("span");
        if ((i + 1) % bosh == 0 && (i + 1) % bish == 0) {
            var textnod = document.createTextNode("Bish-Bosh")
        } else {
            if ((i + 1) % bish == 0) {
                var textnod = document.createTextNode("Bish")
            } else if ((i + 1) % bosh == 0) {
                var textnod = document.createTextNode("Bosh")
            } else {
                var textnod = document.createTextNode(i + 1)
            }
        }
        spanelement.appendChild(textnod);
        outelement.appendChild(spanelement);
    }

}