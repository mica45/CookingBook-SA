<!DOCTYPE html>

<head>
    <!-- Settings -->
    <meta charset="UTF-8">
    <meta name="Cooking Book" content="">
    <meta name="keywords" content="">
    <meta name="Author" content="Mica">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cooking Book</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

    <!-- Stylesheets -->
    <link rel="stylesheet" type="text/css" href="css/general.css">
    <link rel="stylesheet" type="text/css" href="css/<?php echo (basename($_SERVER['SCRIPT_NAME'], ".php")) ?>.css">

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <!-- libraries -->


    <!-- Favicons -->


    <!-- Database -->




</head>

<body>

    <!-- Header -->
    <header>
        <h1>Cooking Book</h1>
    </header>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Cooking Book</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Recipe <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ingredient List</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Add Recipe</a>
                        <a class="dropdown-item" href="#">Add Ingredient</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>

    <!-- The flexible grid (content) -->
    <main>
        <div class="container">
            <div class="row">
                <div class="col">
                    <!-- Table -->
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Recipe</th>
                                <th scope="col">Time</th>
                                <th scope="col">Vegetarian</th>
                                <th scope="col">Gluten Free</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Spaghetti Carbonara</th>
                                <td>20</td>
                                <td>No</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <th scope="row">Onigiri</th>
                                <td>30</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col">
                    <img src="https://placekitten.com/300/300" class="img-fluid" alt="Responsive image">

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Rezept</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Ingredients</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <div class="footer">
        <h2><a href="mailto:mica.zaech@outlook.com">Kontakt</a></h2>
    </div>

    <?php
    if (extension_loaded("sqlite3")) {
        echo "SQLite3-Bibliothek geladen";
    } else {
        echo "SQLite3-Bibliothek nicht geladen";
    }
    ?>

    <!-- Script -->
    <script src="js/index.js"></script>

    <!-- Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

</body>