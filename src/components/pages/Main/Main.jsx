import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import "./Main.scss";

function Main() {
  return (
    <main className="main">
      <Header />
      <p className="p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptas fuga voluptatum vitae molestias. Laboriosam architecto vel tenetur eveniet quasi ratione pariatur, blanditiis voluptatem quam voluptas labore, consequatur voluptate voluptatibus.
      </p>
      <Footer />
    </main>
  );
}

export default Main;