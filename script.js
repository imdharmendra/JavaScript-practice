function head(tittle, style) {
    document.write(`
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <meta name="description" content="about you app">
    <meta name="keywords" content="js app, js template ">
    <link rel="stylesheet" href="${style}">
</head>

<body>
    <header>
        <a href="index2.html">${tittle}</a>
    </header>`);
}

function nav() {
    document.write(`
        <nav>
    <ul>
        <li><a href="index2.html">home</a></li>
        <li><a href="page1.html">page 1</a></li>
        <li><a href="page2.html">page 2</a></li>
        <li><a href="page3.html">page 3</a></li>
        <li><a href="page4.html">page 4</a></li>
    </ul>
</nav>


<main>`);
}

function post(count) {
    start = 1;
    do {
        document.write(`
        <section class="post">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsam.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum asperiores laudantium expedita, mollitia officia sapiente nulla corporis cumque veritatis officiis eius voluptas, neque fugit facilis harum voluptates at sequi culpa atque sed! Quis,
            quisquam numquam placeat porro doloribus quibusdam saepe. Placeat beatae deserunt sit molestiae fugiat dolore? Nesciunt accusantium ad placeat blanditiis, illo eveniet dolorum doloribus molestiae dolorem deleniti minima sed consequatur rerum
            dolor odio ex! Consequatur animi sed voluptas sapiente vitae, aperiam laudantium nulla officia incidunt nihil, aliquid voluptatum, dolore dicta quibusdam odit facilis molestiae saepe similique eveniet. Illo voluptas iusto maxime consequatur.
            Reiciendis nihil cupiditate libero voluptatem voluptatum corrupti quasi est quis autem accusamus tenetur, animi ducimus, molestiae temporibus delectus illo ratione rem nesciunt sed adipisci deserunt sapiente numquam vitae! Ex beatae incidunt
            quia dolor voluptates quae velit? Voluptatem inventore dolores, eum quasi ab quos quae. Sed, eius quae voluptatibus sunt ipsum sapiente inventore tempora labore suscipit quo ullam veniam ipsam, eveniet tenetur cumque eos atque odio ut debitis.
            Tempora enim officia minima magnam consequatur ipsam quibusdam neque tenetur, consectetur dignissimos eius facilis laborum a? Ipsum ab cum, laboriosam, incidunt mollitia sint repudiandae accusamus cupiditate exercitationem officiis impedit
            aperiam sunt! Quidem impedit corporis minima totam nihil, reiciendis temporibus facilis expedita fugiat sequi accusamus fugit quis similique nulla. Ut, perspiciatis officia voluptatibus quia modi dicta est alias similique porro, architecto
            nobis dolor at nesciunt deleniti ipsum aliquid totam autem quaerat natus! Magnam dolore ad dolorum nisi amet est expedita laboriosam, vero sint, atque itaque delectus mollitia illum ducimus esse.</p>
    </section>`)
        start++;
    }
    while (start <= count);

}

function aside() {
    document.write(`<marquee>This is aside section</marquee>`);
}

function footer() {
    documemt.write(`
        </main>
<footer>
    <h4>copyright &copy; 2024 site name</h4>
</footer>`);
}