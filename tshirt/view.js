function render(musics) {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Favorite Songs</title>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <div>
        <h2>Favorite Song <i class="fas fa-music"></i></h2>
    </div>
    <table>
        <thead>
          <tr>
              <th>Number</th>
              <th>Song Name</th>
              <th>Song Type</th>
              <th>Song Of</th>
              <th>Flag</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Golden Hour</td>
                <td>Pop</td>
                <td>English</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/300px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" class="language-image" alt="Flag of English"></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Night Dancer</td>
                <td>Pop</td>
                <td>Japanese</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png" class="language-image" alt="Flag of Japanese"></td>
            </tr>
            <tr>
                <td>3</td>
                <td>more than words</td>
                <td>J-Pop</td>
                <td>japanese</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png" class="language-image" alt="Flag of Japanese"></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Yesterday</td>
                <td>Pop Rock</td>
                <td>Japanese</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png" class="language-image" alt="Flag of Japanese"></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Lemon</td>
                <td>J-Pop</td>
                <td>Japanese</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png" class="language-image" alt="Flag of Japanese"></td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`};
    
module.exports = render;