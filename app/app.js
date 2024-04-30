const userModel = new UserModel();
const userView = new UserView();
const userController = new UserController(userModel, userView);
const router = new Router();

router.addRoute("/", () => userController.init());
router.addRoute("/about", () => userController.about());

router.addRoute("/blog", () => userController.blog());
router.addRoute("/blog1", () => userController.blog1());
router.addRoute("/blog2", () => userController.blog2());
router.addRoute("/blog3", () => userController.blog3());
router.addRoute("/blog4", () => userController.blog4());
router.addRoute("/blog5", () => userController.blog5());

router.addRoute("/contact", () => userController.contact());
router.addRoute("/gallery", () => userController.gallery());
router.addRoute("/gallery1", () => userController.gallery1());
router.addRoute("/gallery2", () => userController.gallery2());
router.addRoute("/gallery3", () => userController.gallery3());
router.addRoute("/gallery4", () => userController.gallery4());
router.addRoute("/gallery5", () => userController.gallery5());




window.addEventListener("hashchange", () => router.navigate());
window.addEventListener("DOMContentLoaded", () => router.navigate());

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
