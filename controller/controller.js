class UserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  change_color() {
    // Get the #content element
    setTimeout(() => {
      console.log($("#home").html());
      // Check if #content contains #home
      if ($("#home").html() != undefined) {
        // Select all internal elements of nav
        $(".nav-link").addClass("text-white"); // Example: changing text color to white
        $(".nav-link").removeClass("text-dark"); // Example: changing text color to white
        $(".logo_header").attr("src", "./images/eventsy_logo.png");

        console.log("abcd");
      } else {
        $(".nav-link").addClass("text-dark"); // Example: changing text color to white
        $(".nav-link").removeClass("text-white"); // Example: changing text color to white
        $(".logo_header").attr("src", "./images/logo_dark.png");

        console.log("aaaa");
      }
    }, 200);
  }
  init() {
    const users = this.model.getUsers();
    this.view.render("home");
    this.change_color();
  }

  about() {
    this.view.render("about");
    this.change_color();
  }

  gallery() {
    this.view.render("gallery");
    this.change_color();
  }

  gallery1() {
    this.view.render("gallery1");
    this.change_color();
  }

  gallery2() {
    this.view.render("gallery2");
    this.change_color();
  }

  gallery3() {
    this.view.render("gallery3");
    this.change_color();
  }

  gallery4() {
    this.view.render("gallery4");
    this.change_color();
  }

  gallery5() {
    this.view.render("gallery5");
    this.change_color();
  }

  
  blog() {
    this.view.render("blog");
    this.change_color();
  }

  blog1() {
    this.view.render("blog1");
    this.change_color();
  }

  blog2() {
    this.view.render("blog2");
    this.change_color();
  }

  blog3() {
    this.view.render("blog3");
    this.change_color();
  }

  blog4() {
    this.view.render("blog4");
    this.change_color();
  }

  blog5() {
    this.view.render("blog5");
    this.change_color();
  }

  contact() {
    this.view.render("contact");
    this.change_color();
  }
}
