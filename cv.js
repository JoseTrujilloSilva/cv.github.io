window.addEventListener('load', codigo);

function codigo() {

    var itemId = '';
    dNoneDiv();
    document.getElementById('main01').style.display = "block";

    const menu = [ { id: "sobreMi", main: "main01" },
    { id: "formacion", main: "main02" },
    { id: "exp", main: "main03" },
    { id: "portfolio",  main: "main04" },
    { id: "contact", main: "main05" }];


    for (const itemMenu of document.getElementsByClassName('menu')) {
        itemMenu.addEventListener('click', eventoMenu);
    }
    



    function eventoMenu() {

        dNoneDiv();

        for (const value of document.getElementsByClassName('menu')) {
            value.style.background = "#ffc107";
        }


        document.getElementById(this.id).style.background = "#ffffff";

        for (const item of menu) {
            if (item.id === this.id) {
                activeItemNav(item.main);
            }
        }


    }



    function activeItemNav(itemMain) {
        console.log(itemMain);
        document.getElementById(itemMain).style.display = 'block';
    }


    function dNoneDiv() {
        for (const value of document.getElementsByClassName('main')) {
            value.style.display = 'none';
        }
    }
}


