export function render(movies) {
   return `  
 <!DOCTYPE html>  <html lang="de ">
     <head> 
         <meta charset="UTF-8">
         <title>Film </title> 
         <link rel="stylesheet" href="styles.css" />
         </head>
         <body>
            ${ movies
               .map((movie)=>  `
      
      
               <form action="/movie/update" method="post">
            
               <input type="hidden" id="id" name="id" value="${ movie.id}" />
               <div>
               <label for="title">Titel:</label>
               <input type="text" id="title" name="title" value="${ movie.title}" />
               </div>
               <br>
               <div>
               <label for="id">Jahr:</label>
               <input type="text" id="year" name="year" value="${movie.year}" />
               </div>
               <br>
               <div>        
               <button type="submit">speichern</button>
               </div>
          
               </form>
               `
               )
                 .join   ('' )}
          </body>
 </html>   `;
 }