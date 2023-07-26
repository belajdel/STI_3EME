<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ex4</title>
</head>
<body>
    <form >
        <fieldset>
        <legend>Informations obligatoires</legend>
        CIN : <input type="text" id="cin" ><br><br>
        Nom et prénom : <input type="text" id="np"><br><br>
        Civilité :
            <input type="radio" value="V1" name="R1" id="c1">Mr
            <input type="radio" value="V2" name="R1" id="c2">Mme</p><br>
        Mail : <input type="mail" id="a" ><br><br>
        
        Mot de passe : <input type="password" id="a" ><br><br>
        Retaper mot de passe : <input type="password" id="a" ><br><br>
        Votre formation	: <select id="l1">
        <option>choisir une formation: </option>
        <option>Informatique</option>
        <option>Réseaux</option>
        <option>Multimédia</option>
        </select></p>
      
        
        Le mot "STI" est composé de : 
        <input type="checkbox" id="C1" >F
        <input type="checkbox" id="C2" >T
        <input type="checkbox" id="C3" >I
        <input type="checkbox" id="C4" >S</p>
        </fieldset>
        <p><input type="button" value="Vérifier" onclick="test();" >
        
        <input type="reset" value="Annuler"></p>
    </form>  
</body>
</html>

