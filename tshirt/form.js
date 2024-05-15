function renderForm(tshirt) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>                         
        <meta charset="UTF-8">
        <title>T-Shirt Stone</title>
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <form action="/tshirt/save" method="post">
            <input type="hidden" id="id" name="id" value="${tshirt.id}" />
            <div>                      
            <img class="img-update" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            </div>
            <div class="size-input">                      
                <label for="title">Size: </label>
                <input type="text" id="size" name="size" value="${tshirt.size}" />
            </div>
            <div class="color-input">
                <label for="id">Color:</label>
                <input type="text" id="color" name="color" value="${tshirt.color}" />
            </div>
            <div class="price-input">                      
                <label for="title">Price: </label>
                <input type="text" id="price" name="price" value="${tshirt.price}" />
            </div>
            <div class="Product-input">
                <label for="id">Product Stock:</label>
                <input type="text" id="productstock" name="productstock" value="${tshirt.productstock}" />
            </div>
            <div>                      
                <button type="submit">save</button>
            </div>
        </form>
    </body>
    </html>
      `}; // backtick Alt + 96
    
module.exports = renderForm;