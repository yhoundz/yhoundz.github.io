let header = `
    <nav class = "noselect">
        <ul>
            <li><a href="#">alexander wang</a></li>
            <span style="float:right;">
                <li><a href="https://www.instagram.com/al_xrw/" target="_blank"><img src="../svgs/Instagram_Glyph_White.png" class="imglink"></a></li>
                <li><a href="mailto:alexrw008@gmail.com" target="_blank"><img src="../svgs/mail_icon.png" class="imglink"></a></li>
            </span>
        </ul>
    </nav>
`;

let footer = `
    <p>©mmxxiii</p>
    <a href="https://github.com/yhoundz/yhoundz.github.io" target="_blank">source code</a>
`;

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;