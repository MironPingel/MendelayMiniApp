function addSources(docs) {
   

   docs.forEach(doc => {
      console.log(doc);

      let card = document.createElement("div");
      card.classList = ["card"];

      // Upper Part 
      
      let topDiv = document.createElement("div");
      topDiv.classList = ["card-header"];

      let h5 = document.createElement("h5");
      h5.classList = ["mb-0"];

      let button = document.createElement("button");
      button.classList = "btn btn-link collapsed";
      button.setAttribute("data-toggle", "collapse");
      button.setAttribute("data-target", "#" + doc.id);
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", doc.id);

      let authors = "";
      doc.authors.forEach(author => {
         if (author.first_name) {
            authors = authors + author.first_name[0] + ", " + author.last_name;
         } else {
            authors = authors + author.last_name;
         }
         
      })

      let title = authors + " ("+doc.year+") " + doc.title;
      let buttonText = document.createTextNode(title);
      button.appendChild(buttonText)


      h5.appendChild(button);
      topDiv.appendChild(h5);
      card.appendChild(topDiv);

      // ----------------------------
      // Collapsable part

      let outerDiv = document.createElement("div");
      outerDiv.classList = "collapse";
      outerDiv.id = doc.id;
      outerDiv.setAttribute("data-parent", "#accordion");
      outerDiv.setAttribute("aria-labelledby", "headingThree");



      let innerDiv = document.createElement("div");
      innerDiv.classList = "card-body";
      let bodyText = document.createTextNode(doc.abstract);

      let innerTitle = document.createElement("h2");
      let titleText = document.createTextNode(doc.title);
      innerTitle.appendChild(titleText);
      innerDiv.appendChild(innerTitle);
      innerDiv.appendChild(bodyText);
      

      let authorTitle = document.createElement("h4");
      authorTitle.classList = "authorTitle";
      let authorTitleText = document.createTextNode("Author");
      authorTitle.appendChild(authorTitleText);
      innerDiv.appendChild(authorTitle);

      doc.authors.forEach(author => {
         let authorName = document.createElement("p");
         let authorNameText = document.createTextNode((author.first_name) ? author.first_name : "" +" "+ author.last_name);
         authorName.appendChild(authorNameText);
         innerDiv.appendChild(authorName);
      })

      outerDiv.appendChild(innerDiv);
      card.appendChild(outerDiv);


      // ----------------------------
      
      let ac = document.getElementById("accordion");
      ac.appendChild(card);
   });
}